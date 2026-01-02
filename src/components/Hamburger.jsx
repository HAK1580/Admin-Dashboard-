import React from 'react'
import { useLocation,Link } from 'react-router-dom';
const Hamburger = () => {

  const location = useLocation();

 const items = [
    { name: "Dashboard", path: "/",icon:"dashboard.svg",white_icon:"white-dashboard.svg" },
    { name: "Reports", path: "/reports",icon:"reports.svg",white_icon:"white-reports.svg"  },
    { name: "Analytics", path: "/analytics",icon:"analytics.svg",white_icon:"white-analytics.svg"  },
    { name: "Settings", path: "/settings",icon:"settings.svg",white_icon:"white-settings.svg" },
  ];



  return (
    <div className='fixed text-black w-[32%] left-0 bg-white h-screen ' > 
  <ul className="flex flex-col gap-8">

          {items.map(item => (
            <li
              key={item.path}
              className={`flex p-5 gap-2  justify-center items-center  md:px-7 cursor-pointer 
                ${
                  location.pathname === item.path
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }
              `}
            >
              <Link to={item.path}>{item.name}</Link>
              <img className="w-5" src={`${(location.pathname === item.path)?item.white_icon:item.icon}`} alt="" />

            </li>
          ))}

        </ul>

 </div>
  )
}

export default Hamburger