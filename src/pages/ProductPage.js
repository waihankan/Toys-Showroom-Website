import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import useFirestore from "../hooks/useFirestore";

const ProductPage = ({ image, title, description, details }) => {
  const { slug } = useParams();
  console.log(`slug: ${slug}`);
  const { docs: collections } = useFirestore("posts");
  console.log(collections);

  const product = collections?.find((item) => item.slug === slug);
  return (
    <div>
      <NavBar />
      {!product && (
        <div className="min-h-[75vh] flex bg-gray-100 items-center justify-center">
          <h1 className="text-2xl">Item Not Found ... </h1>
        </div>
      )}
      {product && (
        <Detail
          image={product?.image}
          title={product?.title}
          description={product?.description}
          details={product?.details}
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
