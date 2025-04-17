import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Dashboard from '../tri';

export default function ProtectedRouts() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

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
  
  {/* <Outlet /> */}
  
  </>
  
  


)
  ;
}