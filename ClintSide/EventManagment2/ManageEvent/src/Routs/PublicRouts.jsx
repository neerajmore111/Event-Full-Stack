import React from 'react'
import { Outlet } from 'react-router'
import Dashboard from '../tri'

export default function PublicRouts() {
  return (
   <>
   <div className="flex h-screen text-white bg-black">
    <Dashboard/>
     <div className="relative w-full overflow-x-hidden">
    <div className="flex flex-1 items-center justify-center">
      <Outlet/>
    </div>
    </div>
    </div>
   </>
  )
}
