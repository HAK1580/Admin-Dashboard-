import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();

  const items = [
    { name: "Dashboard", path: "/",icon:"dashboard.svg",white_icon:"white-dashboard.svg" },
    { name: "Reports", path: "/reports",icon:"reports.svg",white_icon:"white-reports.svg"  },
    { name: "Analytics", path: "/analytics",icon:"analytics.svg",white_icon:"white-analytics.svg"  },
    { name: "Settings", path: "/settings",icon:"settings.svg",white_icon:"white-settings.svg" },
  ];

  return (
    <div className="bg-white border fixed top-22 lg:top-21  border-gray-400 text-black hidden sm:block min-h-[87vh]">
      <div className="sidebar">
        <ul className="flex flex-col gap-8">

          {items.map(item => (
      
         

            <li
              key={item.path}
              className={`py-5  flex justify-evenly items-center  px-5 md:px-7 cursor-pointer 
                ${
                  location.pathname === item.path
                  ? "bg-black text-white"
                  : "bg-white text-black"
                }
                `}
                >
              <Link className="" to={item.path}>{item.name}</Link>
              <img className="w-5" src={`${(location.pathname === item.path)?item.white_icon:item.icon}`} alt="" />
            </li>
                
          
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

