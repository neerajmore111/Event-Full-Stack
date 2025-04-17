const EventModle = require('../../modles/Event')
const BookingMolde = require("../../modles/Booking")

const bookEvent = async (req, res) => {
    const { eventId } = req.body;
    const{attendee}=req.body
    console.log(eventId)
    const event = await EventModle.findById(eventId).populate("bookings");
    console.log(event)
    
    if (!event) return res.status(404).json({ error: "Event not found" });
  
    if (event.bookings.filter(b => b.status === "confirmed").length >= event.maxSlots) {
      return res.status(400).json({ error: "Event is full" });
    }
  
    const booking = await BookingMolde.create({
      eventId: eventId,
      attendee: attendee
    });
  
    event.bookings.push(booking._id);
    await event.save();
  
    res.status(201).json({ message: "Booking confirmed", booking });
  };

const TotalEvent=  async (req, res) => {
  try {
    const events = await EventModle.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
 }

const bookigHistory =  async (req, res) => {
  try {
    console.log("uid",req.user.id )
    const bookings = await BookingMolde.find({ attendee: req.user.id }).populate("eventId");
    console.log(req.user.id)
    res.json(bookings);
    console.log(bookings)
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}

const CancleBooking = async (req, res) => {
  try { 
    const booking = await BookingMolde.findById(req.params.id);
    console.log(booking)
    if (!booking || booking.attendee.toString() !== req.user.id.toString()) {
      return res.status(403).json({ error: "Not authorized or booking not found" });
    }

    // Remove booking reference from event
   await EventModle.findByIdAndUpdate(booking.eventId, {
      $pull: { bookings: booking._id }
    });
    console.log("id", booking._id)
    await BookingMolde.findByIdAndDelete(booking._id);


    res.json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error cancelling booking" });
  }
};
   
  const Report = async (req, res) => {
    try {
      const event = await EventModle.findById(req.params.id).populate("bookings");
      console.log(event)
      if (!event || event.createdBy.toString() !== req.user.id.toString()) {
        return res.status(403).json({ error: "Unauthorized or event not found" });
      }
  
      const totalSlots = event.maxSlots;
      const confirmedBookings = event.bookings.length;
      const availableSlots = totalSlots - confirmedBookings;
  
      res.json({
        title: event.title,
        totalSlots,
        confirmedBookings,
        availableSlots
      });
    } catch (err) {
      res.status(500).json({ error: "Error generating report" });
    }
  }

  

  module.exports = {bookEvent,TotalEvent,bookigHistory,CancleBooking,Report}