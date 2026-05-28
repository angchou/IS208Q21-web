import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const repoLinks = {
    frontend: "https://github.com/angchou/ClientPhungLoc",
    backend: "https://github.com/angchou/ServerPhungLoc",
  };

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      <div className="hidden md:block relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex text-sm items-center gap-1 hover:bg-orange-500 hover:text-white border border-orange-400 text-orange-500 px-3 py-1 font-semibold transition-all cursor-pointer"
        >
          Repository github
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 transition-all duration-200 transform origin-top-right ${
            dropdownOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          <a
            href={repoLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition-colors"
          >
            Frontend Repository
          </a>
          <a
            href={repoLinks.backend}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
            className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition-colors"
          >
            Backend Repository
          </a>
        </div>
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

        <hr className="border-gray-200 my-1" />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Repositories
          </p>
          <a
            href={repoLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-gray-700 hover:text-orange-500"
          >
            Frontend GitHub
          </a>
          <a
            href={repoLinks.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-gray-700 hover:text-orange-500"
          >
            Backend GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
