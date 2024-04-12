import React from "react";
import { NavLink } from "react-router-dom";

function SmHaderLinks({ handleShowMenu }) {
  return (
    <ul className="flex bg-white p-5 flex-col gap-5 mt-4 font-light text-lg lg:hidden absolute top-0 right-10 rounded">
      <li
        className=" text-black rounded px-3 py-2  nav-parent cursor-pointer  dark:text-white"
        aria-current="page"
      >
        <NavLink
          to="/"
          aria-current="page"
          className={({ isActive }) => (isActive ? "isActive" : "")}
          onClick={handleShowMenu}
        >
          Home
        </NavLink>
      </li>
      <li className=" text-gray-700 border-b border-gray-100 px-3 py-2 rounded nav-parent dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white S dark:border-gray-700">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "isActive" : "")}
          onClick={handleShowMenu}
        >
          About me
        </NavLink>
      </li>
      <li className=" text-gray-700 border-b border-gray-100 px-3 py-2 rounded nav-parent dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white S dark:border-gray-700">
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "isActive" : "")}
          onClick={handleShowMenu}
        >
          My services
        </NavLink>
      </li>
      <li className=" text-gray-700 border-b border-gray-100 px-3 py-2 rounded nav-parent dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white S dark:border-gray-700">
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "isActive" : "")}
          onClick={handleShowMenu}
        >
          My projects
        </NavLink>
      </li>
      <li className=" text-gray-700 border-b border-gray-100 px-3 py-2 rounded nav-parent dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white S dark:border-gray-700">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "isActive" : "")}
          onClick={handleShowMenu}
        >
          Contact me
        </NavLink>
      </li>
    </ul>
  );
}

export default SmHaderLinks;
