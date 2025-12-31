import React from 'react'
import { useLocation,Link } from 'react-router-dom';
const Hamburger = () => {

  const location = useLocation();

  const items = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];


  return (
    <div className='fixed text-black w-[30%] left-0 bg-white h-screen ' > 
  <ul className="flex flex-col gap-8">

          {items.map(item => (
            <li
              key={item.path}
              className={`flex p-5 justify-center items-center  md:px-7 cursor-pointer 
                ${
                  location.pathname === item.path
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }
              `}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

        </ul>

 </div>
  )
}

export default Hamburger