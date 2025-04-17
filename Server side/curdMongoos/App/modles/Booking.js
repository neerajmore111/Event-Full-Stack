const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  attendee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["confirmed", "cancelled"], default: "confirmed" },
  createdAt: { type: Date, default: Date.now }
});

let BookingMolde = mongoose.model("Booking", bookingSchema);
module.exports = BookingMolde