import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div>
        <Navbar />
    <div className="flex  gap-12 ">
        <Sidebar />
        <div className="main mt-6">
        <Outlet />

        </div>
    </div>




    </div>
)
}

export default Layout