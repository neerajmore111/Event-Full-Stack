import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";



import {
  Home,
  User,
  Calendar,
  Book,
  ClipboardCheck,
  BookOpen,
  Image,
  Users,
  Mail,
  LogIn,
  Rss,
  Contact,
  Twitter,
  LogOut
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function Dashboard() {
  const user  = useSelector((state) => state.auth.user);
  const token = localStorage.getItem('token');
  const[decodeData,setdecodedata]=useState('')
  const[role,setRole]=useState('')
   const navigate = useNavigate()
  // console.log(user)

  // if (token) {
  //   const decoded = jwtDecode(token);
  //   console.log("Decoded user:", decoded.name);
  // }
    useEffect(()=>{if (token) {
      const decoded = jwtDecode(token);
      // console.log("Decoded user:", decoded.id);
      setdecodedata(decoded.name)
       setRole(decoded.role)
    }})

  // console.log(decodeData)
  // const decoded = jwt.verify(token, "mySuperSecretKey");

  const handleLogout = () => {
    // 1. Remove token and any user data from localStorage
    localStorage.removeItem("token");
  
  
    // 2. Optionally show a toast or message
    toast.success("You’ve been logged out!");
  
    // 3. Redirect to login or homepage
    navigate("/login"); // useNavigate from react-router-dom
  };



  return (
    <>

      {/* Sidebar */}
      <aside className="w-64 bg-[#121212] p-6 flex flex-col justify-between">
        <div>
          {/* <h1 className="text-2xl font-bold mb-8"> {user!==null?<img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            class="inline-block relative object-cover object-center !rounded-full w-12 h-12 border border-white p-0.5"
          />  : <NavItem icon={<User size={21} />} label="Login" />} </h1> */}
          <div>
            <h1 className="text-2xl font-bold mb-8">
              {token ? (
                <div className="flex items-center space-x-4">
                  <img
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    className="inline-block relative object-cover object-center !rounded-full w-12 h-12 border border-white p-0.5"
                  />
                  <div>
                    <p className="text-base font-semibold text-gray-200">{decodeData}</p>
                    <p className="text-base font-normal text-gray-200">Role : {role}</p>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<User size={21} />} label="Login" /></Link>
              )}
            </h1>
          </div>
          <nav className="space-y-4">
            <NavItem icon={<Home size={18} />} label="Home" />
            <NavItem icon={<User size={18} />} label="About" />

            {role=="attendee"&&token?<Link to="/Booking" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<Calendar size={18}/>} label="Events" /></Link>
             :""
            }
            {role=="attendee"&&token?<Link to="/Booking/myBooing" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<Book size={18} />} label="My Booking" /></Link>:''}
          
           {role=="organiser"&&token?<Link to="/eventCreate" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<Calendar size={18}/>} label="Create Event" /></Link>
           :""}
           
    

            {/* <NavItem icon={<PieChart size={18} />} label="Investments" /> */}
            {!token? <Link to="/Register" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<ClipboardCheck  size={18}/>} label="register" /></Link>:""  }
            {!token?   <Link to="/login" className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<LogIn size={18}/>} label="Login" /></Link>:''}
            
            
            {token?<Link to="/#" onClick={handleLogout} className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" ><NavItem icon={<LogOut size={18}/>} label="Log out" /></Link>:''}
            
            
            {/* <button class="rounded-full ...">Register</button>  */}
            <div className="mt-6 border-t border-gray-700 pt-4">
              <NavItem icon={<BookOpen size={18} />} label="Reading List" />
              <NavItem icon={<Image size={18} />} label="Aesthetic Goods" />
              <NavItem icon={<Users size={18} />} label="Talent" />
              <NavItem icon={<Mail size={18} />} label="Newsletters" />
              <NavItem icon={<Rss size={18} />} label="Podcasts" />
            </div>
          </nav>
        </div>

        <div className="space-y-2">
          <NavItem icon={<Contact size={18} />} label="Contact" />
          <a
            href="#"
            className="flex items-center space-x-2 text-sm text-blue-400 hover:underline"
          >
            <Twitter size={18} /> <span>Twitter</span>
          </a>
        </div>
        <Toaster/>
      </aside>

      {/* Main content */}
      {/* <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-5xl font-bold mb-6">Good afternoon</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          My name is SJ — Welcome to sj.land. Below are some tips to get you started on this website.
        </p>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-400 mb-16">
          <p>
            Use keyboard shortcut 1 → 9 to navigate between pages. Try press 2, 3, 4, then 1 to come back here.
          </p>
          <p>
            Don’t know me yet? My name is SJ, and I love over-engineering my personal website. More about me →
          </p>
          <p>
            If you are curious how the site was built, I have a Twitter thread on it. Check it out →
          </p>
          <p>
            I enjoy meeting random people and help where I can. My open calendar is here →
          </p>
          <p>
            Many come here for my list of talented builders. If you are looking for a job, drop me a note. Go to Talent →
          </p>
          <p>
            If this website helped you, or I helped you, feel free to check out some goodies →
          </p>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4">Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UpdateCard
              title="Merger: Compound → Compound Planning"
              description="Compound merged with Alternativ to form a new $1B+ RIA"
              date="Sep 2023"
            />
            <UpdateCard
              title="Interview on LoversMagazine"
              description="Some workspace updates. Full feature at loversmagazine.com/interviews/sj-zhang"
              date="Sep 2023"
            />
            <UpdateCard
              title="Interview on ui.land"
              description="Talked about how I got into design and touched on a little bit of my Fashion..."
              date="Apr 2023"
            />
            <UpdateCard
              title="Joined Magik as an Advisor"
              description="YC S23 - Automating Salesforce"
              date="Jan 2023"
            />
          </div>
        </section>
      </main> */}

    </>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
      {icon}
      <span>{label}</span>
    </div>
  );
}


