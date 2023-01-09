import React from "react";
import ImageCard from "./Card";
import Pagination from "../components/Pagination";

const Grid = ({ collections }) => {
  return (
    <div className="bg-gray-100 mt-16 lg:mt-24 mx-auto max-w-full lg:max-w-[100%] px-6 sm:px-20 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-11">
          {collections.map((collection) => (
            <div className="bg-white mt-3 lg:mt-7">
              <ImageCard
                image={collection.image}
                slug={collection.slug}
                title={collection.title}
                description={collection.description}
                details={collection.details}
              />
            </div>
          ))}
        </div>
        <div className="pt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Grid;
