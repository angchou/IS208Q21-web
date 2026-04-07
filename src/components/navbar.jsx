import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const items = [
    { id: "home", label: "Trang chủ", path: "/home" },
    { id: "about_us", label: "Về chúng tôi", path: "/about_us" },
    { id: "project", label: "Dự án", path: "/project" },
    { id: "progress", label: "Tiến độ", path: "/progress" },
    {
      id: "project_agreement",
      label: "Thỏa thuận dự án",
      path: "/project_agreement",
    },
  ];

  return (
    <nav className="flex justify-between shadow-xl bg-[#F8F8F8] items-center px-4 md:px-10 fixed w-full z-10">
      <div>
        <img src={logo} alt="logo" className="w-18 cursor-progress" />
      </div>

      <div className="hidden md:flex gap-5 my-2">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `px-5 py-2 font-bold border-b-2 text-lg transition-all ${
                isActive
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent hover:border-orange-400"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="rounded-lg border-2 border-orange-400 text-orange-500 px-6 py-1 text-lg font-bold hover:text-white hover:border-orange-300 hover:bg-gradient-to-r from-orange-500 via-orange-400 to-white transition-all cursor-pointer">
          Liên hệ
        </button>
      </div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-[#F8F8F8] shadow-md flex flex-col px-5 gap-4 py-4 md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-lg font-bold ${
                isActive
                  ? "text-orange-500"
                  : "text-black hover:text-orange-500"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <button className="rounded-lg border-2 border-orange-400 text-orange-500 px-6 py-1 text-lg font-bold hover:text-white hover:border-orange-300 hover:bg-gradient-to-r from-orange-500 via-orange-400 to-white transition-all cursor-pointer">
          Liên hệ
        </button>
      </div>
    </nav>
  );
}
