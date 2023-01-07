import React from "react";

const Card = ({ image }) => {
  return (
    <div className="">
      <div className="relative overflow-hidden pb-2/3">
        <a href="#">
          <img
            className="absolute h-full w-full object-cover object-top"
            src={image}
            alt="showroom-image-not-found"
          />
        </a>
      </div>
      <div className="pt-2">
        <a href="#">
          <h5 class="pl-2 text-gray-900 uppercase text-left tracking-tighter font-roboto text-sm font-semibold sm:text-md sm:pl-3">
            Doll E 2 Creation
          </h5>
        </a>
        <p class="pl-2 font-roboto font-light tracking-normal text-gray-600 text-left text-sm sm:text-md sm:pl-3 ">
          Sitting
        </p>
        <div className="flex min-w-full justify-end">
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
