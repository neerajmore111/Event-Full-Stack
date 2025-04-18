import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import EventDashboard from './EventActions'
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const [formdata, setformdata] = useState({

    email: '',
    password: '',

  })
  const [User, setUser] = useState()

  let Getvalue = (e) => {

    let olddata = { ...formdata }

    let getNName = e.target.name
    let getNnameValue = e.target.value

    olddata[getNName] = getNnameValue
    setformdata(olddata)

  }


  // let SaveData = async (e) => {
  //     e.preventDefault();
  //     try {
  //         let response = await axios.post("http://localhost:8000/web/api/run/loguser", formdata)
  //         localStorage.setItem("token", response.data.token);
  //         console.log(response)
  //         setformdata({
  //             email: '',
  //             password: '',
  //         })
  //         setUser(response.data.user)
  //         alert("Login successful.");
  //         if (User.role === 'organizer') {
  //             Navigate("/EventPage")
  //         }
  //         if (User.role === 'attendees ')


  //     } catch (eror) {
  //         alert("Login failed: " + eror.response?.data?.error);
  //     }

  // }
  let SaveData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://server-5rds.onrender.com/web/api/run/loguser", formdata);

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "auth/setUser", payload:response.data.user });
     
      setformdata({
        email: '',
        password: '',
      });
      
      const UserData = response.data.user 
      // Save user info in state
      // setUser(response.data.user); // This is async state update
      // const payload = JSON.parse(atob(data.token.split(".")[1]));
      console.log(UserData)
 
     toast.success("Login Sucessfull")

      // Use response.data.user instead of User (since setUser doesn't update immediately)
      const role = response.data.user.role;

      if (role === 'organizer') {
        Navigate("/EventCreate");
      } else if (role === 'attendee') {
        Navigate("/Booking");
      }
      
    } catch (error) {
      toast.error("Login Failed")
      console.log(error.response?.data?.message || error.message)
    }
  };


  






  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-10">
        <div className="bg-[#1e1e1e] shadow-2xl rounded-2xl p-10 w-full max-w-4xl min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-10 h-full">
            {/* Left side - Form */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Login</h2>
              <form onSubmit={SaveData} className="space-y-6">
                <div className="flex items-center border-b border-gray-600 py-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                    alt="email-icon"
                    className="w-5 mr-3"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    required
                    onChange={Getvalue}
                    value={formdata.email}
                  />
                </div>

                <div className="flex items-center border-b border-gray-600 py-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
                    alt="password-icon"
                    className="w-5 mr-3"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                    autoComplete="current-password"
                    required
                    onChange={Getvalue}
                    value={formdata.password}
                  />
                </div>

                <div className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    id="termsCheck"
                    className="mr-2 accent-blue-500"
                  />
                  <label htmlFor="termsCheck" className="text-gray-300">
                    I agree to all statements in{" "}
                    <a href="#" className="underline text-blue-400">
                      Terms of Service
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
                 
                >
                  Login
                </button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center justify-center">
              <img
                src="/img/bg-hero2.jpg"
                alt="Signup"
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  )
}
