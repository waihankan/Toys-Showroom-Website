import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data: collections } = useQuery(["products"], () => {
    return Axios.get("http://localhost:4000/products").then((res) => res.data);
  });

  return (
    <div>
      <NavBar />
      {collections && <Grid collections={collections} />}
      {/* {collections && (
        <div>
          <p>this is data {collections[1].image} </p>
          <img src={collections[1].image} alt="image" />{" "}
        </div>
      )} */}
      {!collections && (
        <div className="min-h-[75vh] flex bg-gray-100 items-center justify-center">
          <h1 className="text-2xl">Fetching Pictures Failed ... </h1>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
