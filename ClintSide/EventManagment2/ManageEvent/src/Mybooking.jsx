import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export default function Mybooking() {
   const [bookings,setBookings]=useState([])
  //  const checkBooking = useSelector((state) => state.auth.isbooked);
   const dispatch =useDispatch()
   const [checkBooking, setCheckBooking] = useState(false);

   const fetchBooking = async () => {
    try {
      const token2 = localStorage.getItem("token");
      const res = await axios.get("https://server-5rds.onrender.com/web/api/run/BookingHistory", {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };
   


   useEffect(() => {
      
   
       fetchBooking();
     }, [checkBooking]);


     const cancleBooking = async (id) => {

      console.log(id)
      try {
        const token2 = localStorage.getItem('token');
        const res = await axios.delete(`https://server-5rds.onrender.com/web/api/run/cancleBooking/${id}`, {
          headers: {
            Authorization: `Bearer ${token2}`,
          },
           
        });
        // setBookings(res.data);
        // setCheckBooking(!checkBooking);
        fetchBooking();
        toast.success("Booking  canceled")
      } catch (err) {
        console.error('Error fetching bookings', err);
        toast.error("error")
      }
    };





  return (
    <>
    <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%]">
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
    
    {/* Event Details Section */}
    {/* <div className="bg-[#1c1c23] rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Event Details</h2>
      <div className="space-y-2 text-sm text-gray-300">
        <p><span className="font-semibold text-white">Title:</span> {}</p>
        <p><span className="font-semibold text-white">Date:</span> {}</p>
        <p><span className="font-semibold text-white">Time:</span> {}</p>
        <p><span className="font-semibold text-white">Created By:</span> {}</p>
        <p><span className="font-semibold text-white">Category:</span> {}</p>
        <p><span className="font-semibold text-white">Max Slots:</span> {}</p>
        <p><span className="font-semibold text-white">Total Bookings:</span> {}</p>
      </div>
      <button
        className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300 px-5 py-2 rounded-md font-medium"
        // onClick={handleBookSlot}
      >
        Book Now
      </button>
    </div> */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-8 ">
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
 

    {/* My Bookings Table */}
    <div className="bg-[#1c1c23] rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr className="text-sm text-gray-400 uppercase border-b border-gray-700">
            <th className="p-4">Event</th>
            <th className="p-4">Date</th>
         
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={idx} className="border-b border-gray-800">
              <td className="p-4">{booking.eventId.title}</td>
              <td className="p-4">{booking.createdAt}</td>
            
              <td className="p-4  text-green-400">{booking.status}</td>
              <td className="p-4">
                <button
                  className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-md text-xs"
                  onClick={() => cancleBooking(booking._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
           ))} 
        </tbody>
      </table>
    </div>

  </div>
  <Toaster/>
</div>

    
    </>
  )
}
