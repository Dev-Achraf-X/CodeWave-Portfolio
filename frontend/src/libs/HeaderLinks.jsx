import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLinks() {
  return (
    <ul className="flex flex-col mt-4 font-light text-lg lg:flex-row lg:space-x-8 lg:mt-0">
      <li className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent  lg:p-0 dark:text-white">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About me
        </NavLink>
      </li>
      <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My services
        </NavLink>
      </li>
      <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My projects
        </NavLink>
      </li>
      <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact me
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderLinks;
