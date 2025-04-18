import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const lessons = [
  {
    title: "Breathwork & Endurance: Oxygen for Performance",
    level: "Intermediate",
    duration: "34:21",
    image: "/img/bg-hero2.jpg",
    author: "David Harper",
  },
  {
    title: "Strength in Stillness: Holding Poses for Power",
    level: "Advanced",
    duration: "1:15",
    image: "/img/bg-hero.jpg",
    author: "David Harper",
  },
  {
    title: "Strength in Stillness: Holding Poses for Power",
    level: "Advanced",
    duration: "1:15",
    image: "/img/bg-hero.jpg",
    author: "David Harper",
  },

];

export default function BiohackingPage() {
  const [events, setEvents] = useState([]);
  const [decodeData, setdecodedata] = useState('')
  const token1 = localStorage.getItem('token');
  const [checkBooking, setCheckBooking] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token2 = localStorage.getItem("token");
        const res = await axios.get("https://server-5rds.onrender.com/web/api/run/wiveBooking", {
          headers: {
            Authorization: `Bearer ${token2}`,
          },
        });
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, [checkBooking]);

  useEffect(() => {
    if (token1) {
      const decoded = jwtDecode(token1);
      // console.log("Decoded user:", decoded.id);
      setdecodedata(decoded.id)
     
    }
  })


  const handleBookSlot = async(EId,AId)=>{

     let BookingData ={
      eventId:EId,
      attendee:AId,
      status:"confirmed",
      createdAt:new Date().toISOString()
     }  

     try {
      const token = localStorage.getItem("token");
      console.log(token)
      let Rresponse = await axios.post(
        "https://event-full-stack.vercel.app/web/api/run/booking",
        BookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,

          }
        });
        setCheckBooking(!checkBooking);
        // if (Rresponse) {
        //   dispatch({ type: "auth/bookingCheck", payload:true });
        // }
        if(Rresponse){
          navigate("/Booking/myBooing")
        }
       toast.success("Booking Sucessfull")

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }


  return (



    // <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%] ">
    //   {/* Hero Section */}
    //   <div className="relative h-72 rounded-xl overflow-hidden mb-8">
    //     <img
    //       src="/img/bg-hero.jpg"
    //       alt="Biohacking"
    //       className="w-full h-full object-cover brightness-50"
    //     />
    //     <div className="absolute inset-0 p-6 flex flex-col justify-center">
    //       <h1 className="text-4xl font-bold">Biohacking</h1>
    //       <p className="max-w-lg mt-2 text-lg">
    //         The practice of optimizing physical and mental performance through
    //         lifestyle changes, technology, and science-backed interventions.
    //       </p>
    //       <button className="mt-4 w-fit bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-md font-medium">
    //         Get Full Access
    //       </button>
    //     </div>
    //   </div>
    // <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%]">
    //   {/* Hero Section */}
    //   <div className="relative h-72 rounded-xl overflow-hidden mb-8">
    //     <img
    //       src="/img/bg-hero.jpg"
    //       alt="Biohacking"
    //       className="w-full h-full object-cover brightness-50"
    //     />

    //     {/* Overlay Content Centered */}
    //     <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
    //       <h1 className="text-4xl font-bold">Biohacking</h1>
    //       <p className="max-w-xl mt-2 text-lg">
    //         The practice of optimizing physical and mental performance through
    //         lifestyle changes, technology, and science-backed interventions.
    //       </p>
    //       <button className="mt-4 bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-md font-medium">
    //         Get Full Access
    //       </button>
    //     </div>
    //   </div>

    <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%]">
      {/* Hero Section */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-8">
        <img
          src="/img/bg-event.jpg"
          alt="Biohacking"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Overlay Content Centered */}
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold">welcome</h1>
          <p className="max-w-lg mt-1 text-base">
            A solution for event management,streamlines planning, organizing, and booking events,
            enhancing efficiency, user engagement, and overall event experiences.
          </p>
          {/* <button className="mt-3 bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-md font-medium">
          Get Full Access
        </button> */}
        </div>
      </div>




      {/* Lessons Grid */}
      <h2 className="text-2xl font-semibold mb-4">Events</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events&&events?.map((event, idx) => (
          <div key={idx} className="bg-[#1c1c23] rounded-xl overflow-hidden">
            <div className="relative h-48">
              <img
                src="/img/bg-hero.jpg"
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-2 left-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
                {event.category}
              </div>
              <div className="absolute bottom-2 right-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
                {event.date}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-snug">
                {event.title}
              </h3>
              <p className="text-sm mt-2 text-gray-400">{event.createdBy}</p>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {events && events.map((event, idx) => (
    <div key={idx} className="bg-[#1c1c23] rounded-xl overflow-hidden">
      <div className="relative h-48">
        <img
          src="/img/bg-hero.jpg"
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Lock className="w-10 h-10 text-white" />
        </div>
        <div className="absolute bottom-2 left-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
          {event.category}
        </div>
        <div className="absolute bottom-2 right-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
          {new Date(event.date).toLocaleDateString()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg leading-snug">
          {event.title}
        </h3>
        <p className="text-sm mt-1 text-gray-400">Created by: {event.createdBy}</p>

        <div className="text-sm mt-3 text-gray-300 space-y-1">
          <p><span className="font-medium text-white">Time:</span> {event.time}</p>
          <p><span className="font-medium text-white">Max Slots:</span> {event.maxslots}</p>
          <p><span className="font-medium text-white">Total Bookings:</span> {event.totalbooking}</p>
        </div>
      </div>
    </div>
  ))}
</div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events && events.map((event, idx) => (
          <div key={idx} className="bg-[#1c1c23] rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-95 ">
            <div className="relative h-48">
              <img
                src="/img/event-bg-2.jpg"
                alt={event.title}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Top-left: Category */}
              <div className="absolute top-2 left-2 text-xs bg-[#2d2d35] px-2 py-1 rounded">
                {event.category}
              </div>

              {/* Top-right: Time */}
              <div className="absolute top-2 right-2 text-xs bg-[#2d2d35] px-2 py-1 rounded">
                time :{event.time}
              </div>

              {/* Bottom-left: Created By */}
              <div className="absolute bottom-2 left-2 text-xs bg-[#2d2d35] px-2 py-1 rounded">
                By: {event.createdBy}
              </div>

              {/* Bottom-right: Date */}
              <div className="absolute bottom-2 right-2 text-xs bg-[#2d2d35] px-2 py-1 rounded">
                {new Date(event.date).toLocaleDateString()}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-snug">{event.title}</h3>
              {/* <div className="text-sm mt-3 text-gray-300 space-y-1">
            <p><span className="font-normal text-white">Max Slots:</span> {event.maxSlots}</p>
            <p><span className="font-normal text-white">Total Bookings:</span> {event.bookings.length}</p>
          </div> */}
              <div className="flex justify-between items-start mt-3 text-sm text-gray-300">
                <div className="space-y-1">
                  <p>
                    <span className="font-normal text-white">Max Slots:</span> {event.maxSlots}
                  </p>
                  <p>
                    <span className="font-normal text-white">Total Bookings:</span> {event.bookings.length}
                  </p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm" onClick={() => { handleBookSlot(event._id,decodeData) }} >
                  Book Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster/>
    </div >


  );
}
