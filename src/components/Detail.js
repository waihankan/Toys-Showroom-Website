import React from "react";
import Divider from "./Divider";

const Detail = ({ image, title, description, details }) => {
  return (
    <div>
      <div className=" mx-auto flex flex-col mt-[85px] max-w-lg lg:mt-[160px] bg-gray-100">
        <div className="relative overflow-hidden">
          <img
            className="absoulte h-full w-full object-cover object-top"
            src={image}
            alt="image"
          />
        </div>
        <div id="title-section" className="mt-14 text-center mb-5">
          <h1 className="font-roboto text-lg font-semibold uppercase">
            {title}
          </h1>
          <p className="font-roboto text-sm font-light text-gray-500">
            {description}
          </p>
        </div>
        <Divider />
        <div id="product-details-section" className="mt-0 text-center">
          <h3 className="font-roboto text-base font-semibold tracking-tight">
            Product Details
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
