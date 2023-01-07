import React from "react";
import ImageCard from "./Card";
import kaws from "../assests/kaws.webp";
import kaws2 from "../assests/kaws2.webp";
import mirror from "../assests/mirror.webp";
import Pagination from "../components/Pagination";

const Grid = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-16 lg:mt-28 mx-auto max-w-full lg:max-w-[78%] px-6 sm:px-20 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-11">
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws2} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws2} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws2} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws2} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={kaws2} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
          <div className="bg-white mt-3 lg:mt-7">
            <ImageCard image={mirror} />
          </div>
        </div>
        <div className="py-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Grid;
