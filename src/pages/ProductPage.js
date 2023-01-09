import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Detail from "../components/Detail";
import Footer from "../components/Footer";

const ProductPage = ({ image, title, description, details }) => {
  const { slug } = useParams();
  const { data: collections } = useQuery(["products"], () => {
    return Axios.get("http://localhost:4000/products").then((res) => res.data);
  });
  const product = collections?.find((item) => item.slug === slug);
  return (
    <div>
      <NavBar />
      {/* {product && <img src={product?.image} alt="image" />}
      {!product && (
        <div className="min-h-[75vh] flex bg-gray-100 items-center justify-center">
          <h1 className="text-2xl">Item Not Found ... </h1>
        </div>
      )} */}
      <Detail
        image={product.image}
        title={product.title}
        description={product.description}
        details={product.details}
      />
      <Footer />
    </div>
  );
};

export default ProductPage;
