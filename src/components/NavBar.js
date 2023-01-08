import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assests/doll-logo.png";
import account from "../assests/account-logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="drop-shadow-lg py-5 bg-white px-2 lg:py-8 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between md:px-7">
          <a
            href="/"
            className="flex items-center hover:scale-105 ease-out duration-200"
          >
            <img src={Logo} alt="logo" className="w-10 h-10 mr-2 md:mr-3 " />
            <span className="font-roboto self-center text-md font-semibold whitespace-nowrap text-gray-700 uppercase md:text-xl hover:text-gray-600">
              Nazy's Collections
            </span>
          </a>
          <div className="flex items-center justify-between">
            <ul>
              <li>
                <ScrollLink
                  className="hidden md:block py-2 pl-3 pr-4 text-gray font-roboto text-lg font-medium cursor-pointer 
              hover:underline hover:underline-offset-8 hover:scale-105 ease-out duration-200 hover:text-gray-700"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  About
                </ScrollLink>
              </li>
            </ul>
            <ul>
              <li>
                <ScrollLink
                  className="hidden md:block py-2 pl-3 pr-4 text-gray font-roboto text-lg font-medium cursor-pointer
              hover:underline hover:underline-offset-8 hover:scale-105 ease-out duration-200 hover:text-gray-700"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Contact Me
                </ScrollLink>
              </li>
            </ul>
            <ul>
              <li className="block py-2 pl-3 pr-0 text-gray hover:scale-105 ease-out duration-200">
                <a href="#" className="flex items-center ">
                  <img
                    src={account}
                    alt="account"
                    className="w-5.5 h-5.5 align-text-top pb-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
