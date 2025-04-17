import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

export default function RegisTration() {
   

    const Navigate = useNavigate()
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        password: '',
        role: '',

    })

    let Getvalue = (e) => {

        let olddata = { ...formdata }

        let getNName = e.target.name
        let getNnameValue = e.target.value

        olddata[getNName] = getNnameValue
        setformdata(olddata)

    }

    let SaveData = async (e) => {
        e.preventDefault();
        // if (!form.agree) return alert("You must agree to the terms of service");
        // if (form.password !== form.confirmPassword) return alert("Passwords do not match");
        console.log(e)
        try {
           let res = await axios.post("http://localhost:8000/web/api/run/userRegister", formdata)
            
            setformdata({
                name: '',
                email: '',
                password: '',
                role: '',
            })
            console.log(res)
            Navigate("/Login")
            toast.success("Registration Sucessfull")
        } catch (error) {
            toast.error("Registration failed ")
            console.log(error.response?.data?.error)
        }
    };








  return (
   <>
    <div className="flex items-center justify-center h-screen w-full bg-black text-white">
      <div className="bg-[#1e1e1e] rounded-2xl shadow-lg p-8 w-full max-w-4xl flex gap-8">
        {/* Left form section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <form  onSubmit={SaveData} className="space-y-4">
            <div className="flex items-center border-b border-gray-600 px-2 py-1">
            <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="email-icon"
                  className="w-5 mr-3"
                />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent outline-none flex-1"
                required
                name="name"
                onChange={Getvalue}
                value={formdata.name}
              />
            </div>

            <div className="flex items-center border-b border-gray-600 px-2 py-1">
            <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="email-icon"
                  className="w-5 mr-3"
                />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent outline-none flex-1"
                required
                name="email"
                onChange={Getvalue}
                value={formdata.email}
              />
            </div>

            <div className="flex items-center border-b border-gray-600 px-2 py-1">
            <img
                  src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
                  alt="password-icon"
                  className="w-5 mr-3"
                />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
                required
                name="password"
                onChange={Getvalue}
                value={formdata.password}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Your Role</label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    name="role"
                    value="attendee"
                    checked={formdata.role === "attendee"}
                    onChange={Getvalue}
                  />
                  Attendee
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="mr-2"
                    name="role"
                    value="organizer"
                    checked={formdata.role === "organizer"}
                    onChange={Getvalue}
                  />
                  Organizer
                </label>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms">
                I agree to all statements in{" "}
                <a href="#" className="underline text-blue-400">
                  Terms of Service
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            <Link to="/Login" className="underline text-blue-400">
              I am already a member
            </Link>
          </p>
        </div>

        {/* Right Image section */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <img
            src="/img/bg-hero2.jpg"
            alt="Signup"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </div>
      <Toaster/>
    </div>
   </>
  )
}
