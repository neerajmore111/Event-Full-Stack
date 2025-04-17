import React from 'react'
// import AspectRatio from '@mui/joy/AspectRatio';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import Link from '@mui/joy/Link';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
export default function HomePage() {
  return (
    <>


      <div className="bg-[#0d0d11] min-h-screen text-white p-4 w-[150%]">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-0">
          <div className="relative h-60 rounded-xl overflow-hidden mb-8 ">
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


          {/* Features Section */}
          <div className="relative mt-16 text-center rounded-xl overflow-hidden h-[320px] ">
            {/* Background image */}
            <img
              src="/img/homeEvent-bg2.jpg" // <- replace with your image path
              alt="Features background"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Overlay content */}
            <div className="relative grid md:grid-cols-3 gap-6 p-6">
              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Create Events</h3>
                <p className="text-gray-300 text-sm">
                  Organisers can easily create, edit, and manage events in one place.
                </p>
              </div>
              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Book Your Spot</h3>
                <p className="text-gray-300 text-sm">
                  Attendees can view event details and reserve their slots instantly.
                </p>
              </div>
              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Track Participation</h3>
                <p className="text-gray-300 text-sm">
                  Both parties can view booking history and manage event participation seamlessly.
                </p>
              </div>
              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Manage Attendees</h3>
                <p className="text-gray-300 text-sm">
                  Gain full control over attendee lists, send updates, and ensure a smooth experience for all participants.
                </p>
              </div>

              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Monitor Engagement</h3>
                <p className="text-gray-300 text-sm">
                  Easily keep track of who’s attending and get insights into event performance and user interactions.
                </p>
              </div>

              <div className="bg-[#1c1c23]/80 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-white">Authentication System</h3>
                <p className="text-gray-300 text-sm">
                  Secure JWT-based authentication with role-based access for organizers and attendees ensures safe and personalized user experience.
                </p>
              </div>

            </div>
          </div>



        </div>
      </div>



    </>
  )
}






































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
            <div
              title="Merger: Compound → Compound Planning"
              description="Compound merged with Alternativ to form a new $1B+ RIA"
              date="Sep 2023"
            />
            <div
              title="Interview on LoversMagazine"
              description="Some workspace updates. Full feature at loversmagazine.com/interviews/sj-zhang"
              date="Sep 2023"
            />
            <div
              title="Interview on ui.land"
              description="Talked about how I got into design and touched on a little bit of my Fashion..."
              date="Apr 2023"
            />
            <div
              title="Joined Magik as an Advisor"
              description="YC S23 - Automating Salesforce"
              date="Jan 2023"
            />
          </div>
        </section>
      </main> */}




//   <Box sx={{ minHeight: 350 }}>
//   <Card
//     variant="outlined"
//     sx={(theme) => ({
//       width: "100%",
//       gridColumn: 'span 2',
//       flexDirection: 'row',
//       backgroundColor:'black',
//       flexWrap: 'wrap',
//       resize: 'horizontal',
//       overflow: 'hidden',
//       gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
//       transition: 'transform 0.3s, border 0.3s',
//       '&:hover': {
//         borderColor: theme.vars.palette.primary.outlinedHoverBorder,
//         transform: 'translateY(-2px)',
//       },
//       '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
//     })}
//   >
//     <AspectRatio
//       variant="soft"
//       sx={{
//         flexGrow: 1,
//         display: 'contents',
//         '--AspectRatio-paddingBottom':
//           'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
//       }}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
//         loading="lazy"
//         alt=""
//       />
//     </AspectRatio>
//     <Box
//       sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 200 }}
//     >
//       <Box sx={{ display: 'flex' }}>
//         <div>
//           <Typography level="title-lg">
//             <Link
//               href="#container-responsive"
//               overlay
//               underline="none"
//               sx={{
//                 color: 'white',
//                 '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
//               }}
//             >
//               Yosemite National Park
//             </Link>
//           </Typography>
//           <Typography level="body-sm">California, USA</Typography>
//         </div>
//         <IconButton
//           size="sm"
//           variant="plain"
//           color="neutral"
//           sx={{ ml: 'auto', alignSelf: 'flex-start' }}
//         >
//           <FavoriteBorderRoundedIcon color="danger" />
//         </IconButton>
//       </Box>
//       <AspectRatio
//         variant="soft"
//         sx={{
//           '--AspectRatio-paddingBottom':
//             'clamp(0px, (100% - 200px) * 999, 200px)',
//           pointerEvents: 'none',
//         }}
//       >
//         <img
//           alt=""
//           src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
//         />
//       </AspectRatio>
//       <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
//         <Avatar variant="soft" color="neutral">
//           Y
//         </Avatar>
//         <div>
//           <Typography level="body-xs">Designed by</Typography>
//           <Typography level="body-sm">Nature itself</Typography>
//         </div>
//       </Box>
//     </Box>
//   </Card>
// </Box> */}