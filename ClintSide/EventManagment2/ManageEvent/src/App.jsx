import { Route, Routes } from "react-router"
import PublicRouts from "./Routs/PublicRouts"
import { jwtDecode } from "jwt-decode";
import RegistrationPage from "./Page/RegistrationPage"
import LoginPage from "./Page/LoginPage"
import HomePage from "./Page/HomePage"
import BiohackingPage from "./SideBar"
import EventDashboard from "./EventActions"
import ViveEvent from "./ViveEvent"
import EventRouts from "./Routs/EventRouts"
import PublicRout1 from "./Routs/PublicRout1"
import ProtectedRouts from "./Routs/ProtectedRoutes"
import BookingRoutes from "./Routs/BookingRoutes"
import Mybooking from "./Mybooking"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"





function App() {
  const token = localStorage.getItem('token');
  const[decodeData,setdecodedata]=useState('')
   useEffect(()=>{if (token) {
         const decoded = jwtDecode(token);
         // console.log("Decoded user:", decoded.id);
         setdecodedata(decoded.role)
         
       }})
   
  return (
    // <>
    // <Routes>
    //    <Route path="/" element={<PublicRouts />}  >
    //    <Route index element={<HomePage/>} />
    //    <Route path="Register" element={<RegistrationPage/>} />
    //    <Route path="Login" element={<LoginPage/>} />
    //    <Route path="EventCreate" element={<EventRouts/>} >
    //    <Route index element={<EventDashboard/>} />
    //    <Route path="viveEvent" element={<ViveEvent/>} />
    //    </Route>
      
    //    </Route>
    // </Routes>

    // </>
    <>
    <Routes>
       
      {/* 👥 PUBLIC ROUTES */}
      <Route element={<PublicRout1 />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage />} />
        </Route>
      {/* 🔐 PROTECTED ROUTES */}
      <Route element={<ProtectedRouts />}>
          <Route path="/eventCreate" element={<EventRouts/>}>
          <Route index element={<EventDashboard  />} />
          <Route path="viveEvent" element={<ViveEvent />} />
        </Route>
        
      
        <Route path="/Booking" element={<BookingRoutes />}>
        <Route index element={<BiohackingPage/>} />
        <Route path="myBooing" element={<Mybooking/>} />
        </Route>
         
      

       
        

        
      </Route>

    </Routes>
  </>





  )
}

export default App

