const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  maxSlots: Number,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

let EventModle = mongoose.model("Event", eventSchema);
module.exports = EventModle