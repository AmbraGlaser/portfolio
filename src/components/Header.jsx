import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-Clay border-b border-Brown">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3">
          <span className="text-Brown opacity-70 text-3xl font-title">
            Ambra Glaser
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:block md:w-auto bg-Clay`}
        id="navbar-solid-bg"
      >
        <ul className="flex flex-col mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 p-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-Brown font-second rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-3 text-Brown font-second rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-Brown font-second rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Curriculum Vitae
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-Brown font-second rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
