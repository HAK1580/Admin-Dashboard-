import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();

  const items = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-white border fixed top-22  border-gray-400 text-black hidden sm:block min-h-[87vh]">
      <div className="sidebar">
        <ul className="flex flex-col gap-8">

          {items.map(item => (
            <li
              key={item.path}
              className={`py-5 px-5 md:px-7 cursor-pointer 
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
    </div>
  );
};

export default Sidebar;

