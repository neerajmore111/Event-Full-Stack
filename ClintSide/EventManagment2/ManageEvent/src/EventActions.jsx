import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import {
 Eye,
 Pencil,
 Trash2,
} from "lucide-react";

export default function EventDashboard() {
  const user = useSelector((state) => state.auth.user);
  const EventD =useSelector((state) => state.auth.event);
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const[decodedata,setdecodedata]=useState('')
  const [formdata, setformdata] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    category: '',
    createdBy: '',
    maxSlots: '',
    _id: '',

  })
 
  
  // function decodeToken(token) {
  //   try {
  //     const parts = token.split(".");
  //     if (parts.length !== 3) throw new Error("Invalid token");
  
  //     // URL‑safe base64 to normal base64
  //     const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  //     // Decode and parse JSON
  //     const json = atob(payload);
  //     return JSON.parse(json);
  //   } catch (err) {
  //     console.error("Failed to decode token:", err);
  //     return null;
  //   }
  // }
 
  // useEffect(() => {
  //   if (user?.id) {
  //     setformdata((f) => ({ ...f, createdBy: user.id }));
  //   }
  // }, [user]);



  let Getvalue = (e) => {

    let olddata = { ...formdata }

    let getNName = e.target.name
    let getNnameValue = e.target.value

    olddata[getNName] = getNnameValue
    setformdata(olddata)

  }
  
 
  
  
let getMyEvents = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`https://server-5rds.onrender.com/web/api/run/readEvent/${user?.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const allevents = res.data;
    if (allevents) {
      dispatch({ type: "auth/userEvent", payload: allevents });
    }
  } catch (err) {
    console.log("Failed to fetch events:", err);
  }
};

  //   const data = decodeToken(raw);
  //   console.log('Decoded JWT payload:', data );
    // setuserplaylode(data)
    // // e.g. payload.id, payload.role, payload.exp, etc.


  let SaveData = async (e) => {
    e.preventDefault();

    if(formdata._id){
       try{

         let res = await axios.put(`https://server-5rds.onrender.com/web/api/run/update/${formdata._id}`,formdata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
  
            }
          }
         )
         setformdata({
          title: '',
          description: '',
          date: '',
          time: '',
          category: '',
          createdBy: '',
          maxSlots: '',
          _id:'',
        })
        getMyEvents()
        toast.success('updated  Successfully!')
         
       } catch (error) {
        toast.error("updating faild!.")
        console.log(error)
       }


    }else{
        try {
        const token = localStorage.getItem("token");
        console.log(token)
        let Rresponse = await axios.post(
          "https://server-5rds.onrender.com/web/api/run/insert",
          formdata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
  
            }
          }
        );
        // // Save token to localStorage
        // localStorage.setItem("token", response.data.token);
        console.log(Rresponse)
        // Clear form fields
        setformdata({
          title: '',
          description: '',
          date: '',
          time: '',
          category: '',
          createdBy: '',
          maxSlots: '',
        })
        
       
   
        // Save user info in state
        // setUser(response.data.user); // This is async state update
        getMyEvents()
        toast.success('Event create!')
  
        // Use response.data.user instead of User (since setUser doesn't update immediately)
        // const role = response.data.user.role;
  
        // if (role === 'organizer') {
        //   Navigate("/organizer/create");
        // } else if (role === 'attendee') {
        //   Navigate("/attendee/bookings");
        // }
  
      } catch (error) {
        alert("Login failed: " + error.response?.data?.msg || error.msg);
        console.log(error)
      }
    }


   
  };

 let viveEv=(id)=>{
     if(id){
      dispatch({ type: "auth/EventId", payload: id });
      navigate("/EventCreate/viveEvent")
     } else{}
 }

 const token = localStorage.getItem('token');
  useEffect(()=>{if (token) {
    const decoded = jwtDecode(token);
    console.log("Decoded user:", decoded.id);
    setdecodedata(decoded.id)
  }})
 
 console.log(decodedata)
  
// console.log(getMyEvents())

  // console.log(EventD)
 

  const DeleteData = async (id)=>{
     
    try {
      const token2 = localStorage.getItem('token');
      const res = await axios.delete(`https://server-5rds.onrender.com/web/api/run/deleteEvent/${id}`, {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
         
      });
    
      getMyEvents()
      toast.success('deleted Successfully')


    } catch (err) {
      console.error('Error in deleting event ', err);
      toast.error("Error in deleting event.")
    }
  }











  const EditData = async (id) => {

    console.log(id)
    try {
      
      const res = await axios.get(`https://server-5rds.onrender.com/web/api/run/singleEvent/${id}`)
      
      if(res){
        setformdata(res.data)
      }

      

    } catch (err) {
      toast.error("error!")
      console.error('unable to edit the event', err);
    }
  };



  useEffect(()=>{
      getMyEvents()
  },[])




  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 text-white bg-black min-h-screen">
      {/* Event Creation Section */}
      <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4"> Create Event</h2>
        <h1  className="text-2xl mb-1 "> Your ID {decodedata} </h1>
        {/* <h1 className="text-2xl mb-2 " > Your id={payload.id}   </h1> */}
        <form onSubmit={SaveData} className="space-y-4">
          <div className="border-b border-gray-600" >
            <label htmlFor="title" className="block mb-1 font-medium">Event Title</label>
            <input type="text" id="title" placeholder="Enter event title" required name="title" onChange={Getvalue}
              value={formdata.title} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400 " />
          </div>

          <div className="border-b border-gray-600" >
            <label htmlFor="description" className="block mb-1 font-medium">Description</label>
            <input id="description" type="text" required name="description" placeholder="Enter event description" onChange={Getvalue}
              value={formdata.description} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400" />
          </div>

          <div className="border-b border-gray-600">
            <label htmlFor="date " className="block mb-1 font-medium ">Date</label>
            <input id="date" type="date" required name="date" onChange={Getvalue}
              value={formdata.date} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400" />
          </div>

          <div className="border-b border-gray-600">
            <label htmlFor="time" className="block mb-1 font-medium">Time</label>
            <input id="time" type="time" required name="time" onChange={Getvalue}
              value={formdata.time} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400" />
          </div>

          <div className="border-b border-gray-600">
            <label htmlFor="category" className="block mb-1 font-medium">Category</label>
            <select id="category" type="text" required name="category" onChange={Getvalue}
              value={formdata.category} className="w-full p-2 bg-[#1e1e1e] outline-none text-white placeholder-gray-400">
              <option value="">Select a category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="meetup">Meetup</option>
            </select>
          </div>


          <div className="border-b border-gray-600" >
            <label htmlFor="Created by" className="block mb-1 font-medium">Created By</label>
            <input id="created by" type="text" required name="createdBy" placeholder="past your id here" onChange={Getvalue}
              value={formdata.createdBy} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400" />
          </div>

          <div className="border-b border-gray-600" >
            <label htmlFor="MaxSlotes" className="block mb-1 font-medium">max Slots</label>
            <input id="MaxSlotes" type="number" required min="0" name="maxSlots" placeholder="Enter event description" onChange={Getvalue}
              value={formdata.maxSlots} className="w-full p-2 bg-transparent outline-none text-white placeholder-gray-400" />
          </div>


          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
           {formdata._id?"Update":"Create Event" }
          </button>
        </form>
      </div>

      {/* Event List & Management Section */}
      <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-xl">
        <div className="flex items-center gap-2 justify-between mb-4 ">
          <h2 className="text-2xl font-bold">Your Events  </h2>
          <button className=" bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded" >Get all</button>
          {/* <select className="w-40 p-2 bg-transparent outline-none text-white placeholder-gray-400 border-b border-gray-600">
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select> */}
        </div>

        <div className="space-y-4">
          {EventD && EventD.map((event,ind) => (
            <div key={ind} className="border border-gray-700 p-4 gap-2 rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Sample Event {event.title}</h3>
                <p className="text-sm text-gray-400">Date {event.date} | Category:{event.category}</p>
              </div>
              <div className="mt-2 lg:mt-0 flex gap-2">
                <button className=" bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded"  onClick={()=>{EditData(event._id)}}  ><Pencil size={18}  /></button>
                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded"   onClick={()=>{DeleteData(event._id)}}    ><Trash2 size={18} /></button>
                <button className=" bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded" onClick={()=>{viveEv(event._id)}}  > <Eye size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
