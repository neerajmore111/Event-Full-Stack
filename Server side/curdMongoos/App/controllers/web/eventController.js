const EventModle = require('../../modles/Event')

let createEvent = async (req, res) => {
  const { title, description, date, time, category, maxSlots,createdBy} = req.body;

  const event = new EventModle({
    title:title,
    description: description,
    date:date,
    time:time,
    category:category,
    maxSlots:maxSlots,
    createdBy:createdBy
  })
  await event.save().then(() => {
   
    res.json({ message: "Event Saved", event });
  }).catch((err) => {
    res.send({ status: 0, msg: "error while save=ing the data ", err })
  })


};

let  deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await EventModle.findById(id);

  if (!event) return res.status(404).json({ error: "Event not found" });
  console.log("event.createdBy:", event.createdBy); 
  console.log("req.user.id:", req.user.id);
  if (!event.createdBy||event.createdBy.toString() !== req.user.id)
    return res.status(403).json({ error: "Unauthorized he b " });

  await EventModle.findByIdAndDelete(id);
  res.json({ message: "Event deleted successfully" });
};

let  editEvent = async (req, res) => {

  try{
  const event = await EventModle.findById(req.params.id);

  if (!event) return res.status(404).json({ error: "Event not found" });
  if (event.createdBy.toString() !== req.user.id)
    return res.status(403).json({ error: "Unauthorized" });

  // Destructure only the allowed fields to update
  const { title, description, date, time, category, maxSlots } = req.body;

  // Update event fields
  if (title) event.title = title;
  if (description) event.description = description;
  if (date) event.date = date;
  if (time) event.time = time;
  if (category) event.category = category;
  if (maxSlots) event.maxSlots = maxSlots;
  await event.save();

  res.json({ message: "Event updated", event });
 }catch (err) {
  console.error(err);
  res.status(500).json({ error: "Server error" });
 }
};

 let getEventBookings = async (req, res) => {
  const event = await EventModle.findById(req.params.id).populate("bookings");
  if (!event) return res.status(404).json({ error: "Event not found" });

  if (event.createdBy.toString() !== req.user.id)
    return res.status(403).json({ error: "Unauthorized" });

  const confirmed = event.bookings.filter(b => b.status === "confirmed");

  res.json({
    title: event.title,
    totalSlots: event.maxSlots,
    totalBookings: confirmed.length,
    availableSlots: event.maxSlots - confirmed.length,
    bookings: confirmed
  });
};

let getMyEvents = async (req, res) => {
  const events = await EventModle.find({ createdBy: req.user.id });
  console.log( req.user.id )
  res.json(events);
};


let getsingle = async (req, res) => {
  const Eid = req.params.id  
  const events = await EventModle.findOne({ _id:Eid });
  // console.log( )
  res.json(events);
};
 



let EventByCat  = async (req, res) => {
  const { title, category, date } = req.query;

  const query = {};

  if (title) query.title = { $regex: title, $options: "i" };
  if (category) query.category = category;
  if (date) query.date = new Date(date);

  try {
    const events = await EventModle.find(query);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Error fetching events" });
  }
};

// let EventByCat = async (req, res) => {
//   const { title, category, date } = req.query;

//   const query = {};

//   if (title) query.title = { $regex: title.trim(), $options: "i" };
//   if (category) query.category = category;
//   if (date) {
//     const start = new Date(date);
//     start.setHours(0, 0, 0, 0);

//     const end = new Date(date);
//     end.setHours(23, 59, 59, 999);

//     query.date = { $gte: start, $lte: end };
//   }

//   try {
//     const events = await EventModle.find(query);
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching events" });
//   }
// };

module.exports = { createEvent,deleteEvent,editEvent,getEventBookings,getMyEvents,EventByCat,getsingle}
