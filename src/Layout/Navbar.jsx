import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 py-2.5 rounded dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src="../assets/paintLogo.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Kreate Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            KreateColors
          </span>
        </NavLink>
        <label htmlFor="search" className="rounded">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="hidden md:block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none w-full pl-10 p-2.5"
          />
        </label>

        <ul className="flex justify-between items-center gap-4 px-4 space-x-8 mt-0 text-xl font-medium">
          <i className="fa-solid fa-magnifying-glass block md:hidden"></i>
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-house"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
