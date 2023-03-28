import React, { useState } from "react";
import { nav } from "../../data";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          const { href, name } = item;

          if (name === "Services") {
            return (
              <li key={index} className="relative">

                <button
                  className="hover:text-black hover:underline transition focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {name}
                </button>
                <FaCaretDown className="inline-block ml-1 text-white" />
                <ul
                  className={`absolute mt-2 py-2 w-48 bg-white font-first text-sm rounded-md shadow-lg ${
                    isDropdownOpen ? "" : "hidden"
                  }`}>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      UI/UX Design
                    </a>
                  </li>
                </ul>
              </li>
            );
          }

          return (
            <li key={index}>
              <a
                className="hover:text-black hover:underline transition"
                href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
