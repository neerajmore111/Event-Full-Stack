let express= require('express')
const {createEvent,deleteEvent,editEvent,getEventBookings,getMyEvents,EventByCat,getsingle} = require('../../controllers/web/eventController')
const {register,login}= require('../../controllers/web/userController')
const {bookEvent,TotalEvent,bookigHistory,CancleBooking,Report}=require("../../controllers/web/bookingController")
const {auth}= require("../../Middleware/authMiddleware") 
const {role}=require("../../Middleware/roleMiddleWare")
let projectRoutes =express.Router()


//  Public Routes(no auth required)
projectRoutes.post("/userRegister",register)
projectRoutes.post("/loguser",login)
projectRoutes.get("/EventByCat",EventByCat)

// 🔐 Protected Route - Organizer only
projectRoutes.post("/insert",auth,role("organizer"), createEvent)
projectRoutes.delete("/deleteEvent/:id",auth,role("organizer"),deleteEvent)
projectRoutes.put("/update/:id",auth,role("organizer"),editEvent)
projectRoutes.get("/getbooking/:id",auth,role("organizer"),getEventBookings)
projectRoutes.get("/readEvent/:id",auth,role("organizer"),getMyEvents)
projectRoutes.get("/singleEvent/:id",getsingle)
projectRoutes.get("/Report/:id",auth,role("organizer"),Report)

// 🔐 Protected Route - Attendee only
projectRoutes.post("/booking",auth,role("attendee"),bookEvent)
projectRoutes.get("/wiveBooking",auth,role("attendee"),TotalEvent)
projectRoutes.get("/BookingHistory",auth,role("attendee"),bookigHistory)
projectRoutes.get("/EventByCat",auth,EventByCat)
projectRoutes.delete("/cancleBooking/:id",auth,role("attendee"),CancleBooking)
module.exports = projectRoutes