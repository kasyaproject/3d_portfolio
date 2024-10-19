import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-center items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full sm:max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="object-contain border-2 rounded-full w-9 h-9"
          />
        </Link>

        {/* Navbar menu */}
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.title ? "text-white" : "text-secondary"
              } font-semibold`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`} className="hover:text-white ">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end flex-1 sm:hidden">
          {/* button Burger */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain cursor-pointer w-7 h-7"
            onClick={() => setToggle(!toggle)}
          />

          {/* Burger list */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 from-gray-700 to-black bg-gradient-to-r absolute top-20 right-0 mx-4 min-w-36 z-10 rounded-md`}
          >
            <ul className="flex flex-col gap-4 list-none ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.title ? "text-white" : "text-secondary"
                  } font-semibold`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="hover:text-white ">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
