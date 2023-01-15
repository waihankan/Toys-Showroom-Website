import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ image, slug, title, description, details }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="">
      <div className="relative overflow-hidden pb-2/3">
        <Link to={`products/${slug}`} onClick={handleClick}>
          <motion.img
            whileHover={{ opacity: 0.8, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute h-full w-full object-cover object-top"
            src={image}
            alt="showroom-image-not-found"
          />
        </Link>
      </div>
      <div className="pt-2">
        <h5 class="pl-2 text-gray-900 uppercase text-left tracking-tighter font-roboto text-sm font-semibold sm:text-md sm:pl-3">
          {title}
        </h5>
        <p class="pl-2 font-roboto font-light tracking-normal text-gray-600 text-left text-sm sm:text-md sm:pl-3 ">
          {description}
        </p>
        <div className="flex min-w-full justify-end">
          <Link
            to={`products/${slug}`}
            className="font-roboto inline-flex items-center text-xs font-semibold text-center mr-2 mb-2.5 mt-1 pr-2 text-black bg-white border-2 border-gray-500 rounded-md px-1 py-0.5 sm:px-3 sm:py-2 sm:mr-4 sm:mt-1 sm:mb-3
            hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300 ease-in-out"
          >
            Details
            <svg
              aria-hidden="true"
              className="w-3 h-3 ml-1 -mr-1 sm:w-4 sm: sm:h-4 sm:ml-1 sm:-mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
