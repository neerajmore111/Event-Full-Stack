import React from "react";
import { Lock } from "lucide-react";
import { useSelector } from "react-redux";

const lessons = [
    {
        title: "Breathwork & Endurance: Oxygen for Performance",
        level: "Intermediate",
        duration: "34:21",
        image: "/lesson1.jpg",
        author: "David Harper",
    },
    {
        title: "Strength in Stillness: Holding Poses for Power",
        level: "Advanced",
        duration: "1:15",
        image: "/lesson2.jpg",
        author: "David Harper",
    },
];

const members = [
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        department: "Organization",
        status: "online",
        employed: "23/04/18",
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        department: "Organization",
        status: "online",
        employed: "23/04/18",
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        department: "Organization",
        status: "online",
        employed: "23/04/18",
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        department: "Organization",
        status: "online",
        employed: "23/04/18",
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
        name: "John Michael",
        email: "john@creative-tim.com",
        role: "Manager",
        department: "Organization",
        status: "online",
        employed: "23/04/18",
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    // Add more members here as needed
];



 

export default function ViveEvent() {

  const id = useSelector((state) => state.auth.id);
  const EventD =useSelector((state) => state.auth.event);
   console.log(id)
  console.log(EventD)

 
let FindEv =  EventD && EventD?.find(event =>event._id === id )

  console.log(FindEv)

    return (



        <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%] ">
            {/* Hero Section */}
            <div className="relative h-72 rounded-xl overflow-hidden mb-8">
                <img
                    src="/img/bg-hero.jpg"
                    alt="Biohacking"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0  p-6 flex flex-col justify-center h-[100%]">
                    <h1 className="text-4xl font-bold">Event Title {FindEv?.title} </h1>
                    <p className="max-w-lg mt-2 text-lg">
                        The practice of optimizing physical and mental performance through
                        lifestyle changes, technology, and science-backed interventions.
                    </p>
                    <button className="mt-4 w-fit bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-md font-medium">
                        Get Full Access
                    </button>
                </div>
            </div>

            {/* Lessons Grid */}
            {/* <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson, idx) => (
          <div key={idx} className="bg-[#1c1c23] rounded-xl overflow-hidden">
            <div className="relative h-48">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-2 left-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
                {lesson.level}
              </div>
              <div className="absolute bottom-2 right-2 text-sm bg-[#2d2d35] px-2 py-1 rounded">
                {lesson.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-snug">
                {lesson.title}
              </h3>
              <p className="text-sm mt-2 text-gray-400">{lesson.author}</p>
            </div>
          </div>
        ))}
      </div> */}

            {/* Event Info Card */}
            {/* <h2 className="text-2xl font-semibold mb-4">Event Details</h2> */}
            <div className="bg-[#1c1c23] rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Event Details</h3>

                {/* <p className="text-gray-400 text-sm mb-4">
                    Explore the world of biohacking and learn how to upgrade your body and mind through science-backed strategies.
                </p> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                        <span className="font-semibold text-white">Created By:</span> {FindEv?.createdBy}
                    </div>
                    <div>
                        <span className="font-semibold text-white">Date:</span> {FindEv?.date}
                    </div>
                    <div>
                        <span className="font-semibold text-white">Max Slots:</span> {FindEv?.maxSlots}
                    </div>
                    <div>
                        <span className="font-semibold text-white">Total Bookings:</span> {FindEv?.bookings.length}
                    </div>
                    <div>
                        <span className="font-semibold text-white">Category:</span> {FindEv?.category}
                    </div>

                </div>
                <div className="p-6 px-0 overflow-auto">
                    <table className="w-full mt-4 text-left table-auto min-w-max  ">
                        <thead>
                            <tr className="text-sm text-gray-400 uppercase border-b border-gray-700">
                                <th className="p-4"> Booking Members</th>
                                <th className="p-4">Function</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Employed</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, idx) => (
                                <tr key={idx} className="border-b border-gray-800">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="h-9 w-9 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-white text-sm">{member.name}</p>
                                                <p className="text-gray-400 text-sm">{member.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-white text-sm">{member.role}</p>
                                        <p className="text-gray-400 text-sm">{member.department}</p>
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md uppercase font-bold">
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-white text-sm">{member.employed}</p>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            type="button"
                                            className="h-10 w-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-white/10"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* <button className="mt-6 bg-yellow-400 text-black hover:bg-yellow-300 px-5 py-2 rounded-md font-medium">
                    Book Now
                </button> */}
            </div>

        </div>


    );
}
