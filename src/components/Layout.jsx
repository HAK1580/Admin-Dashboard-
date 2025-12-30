import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div>
        <Navbar />
    <div className="flex  gap-6 ">
        <Sidebar />
        <div className="main mt-6 overflow-auto   sm:fixed left-35 top-16 max-h-screen w-full sm:w-[92%] ">
        <Outlet />

        </div>
    </div>




    </div>
)
}

export default Layout

