import React from "react";
import Divider from "./Divider";

const Detail = ({ image, title, description, details }) => {
  let details_array = [];
  let long_description = "";
  for (const property in details) {
    if (property === "description") {
      long_description = details[property];
    } else {
      details_array.push(
        <div className="mt-3 mx-auto max-w-[65%] flex justify-between text-center lg:mx-0 lg:max-w-[100%]">
          {/* <p className="font-roboto text-sm font-light text-gray-500">
          {property}: {details[property]}
        </p> */}
          <div className="w-[100%]">
            <p className="capitalize text-left font-roboto text-sm font-light text-gray-500 lg:text-base">
              {property}:
            </p>
          </div>
          <div className="w-full">
            <p className="text-left font-roboto text-sm font-light text-gray-700 lg:text-base">
              {details[property]}
            </p>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto flex flex-col pt-[85px] max-w-2xl lg:pt-[160px] bg-gray-100 lg:flex-row lg:max-w-[85%] 2xl:max-w-[55%] min-[2200px]:max-w-[50%] justify-between lg:pb-20">
        <div className="relative overflow-hidden xl:w-[650px] xl:h-[650px] lg:max-xl:h-[600px] lg:max-xl:w-[600px]">
          <img
            className="absoulte h-full w-full object-cover object-top"
            src={image}
            alt="image"
          />
        </div>
        <div className="mx-auto max-w-lg min-w-[350px] lg:ml-14 min-[2400px]:mr-[10%] min-[2400px]:ml-0 lg:max-w-[350px]">
          <div
            id="title-section"
            className="mt-14 text-center mb-5 lg:mt-5 font-roboto"
          >
            <h1 className="text-lg font-semibold uppercase lg:text-start">
              {title}
            </h1>
            <div className="text-sm font-light text-gray-500 lg:text-start lg:text-base">
              <i className="font-semibold">{description}</i>
              <p className="mx-auto max-w-[80%] lg:max-w-[100%] lg:mt-2">
                {long_description}
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <Divider />
          </div>
          <div
            id="product-details-section"
            className="mt-0 text-center lg:text-start"
          >
            <h3 className="font-roboto text-base font-semibold tracking-tight lg:text-start lg:text-lg">
              Product Details
            </h3>
            <div className="mt-3 lg:mt-1">{details_array}</div>
            <div>
              <p className="mt-6 font-poppins tracking-tight text-xs font-light text-gray-700">
                (These are reference pictures ONLY. Actual product may vary.)
              </p>
              <p className="mt-3 font-poppins text-xs font-light text-gray-700">
                Please contact if you are interested
              </p>
            </div>
          </div>
          <hr className="mt-7 mb-8"></hr>
        </div>
      </div>
    </div>
  );
};

export default Detail;
