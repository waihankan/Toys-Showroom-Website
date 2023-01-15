import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import useFirestore from "../hooks/useFirestore";

const HomePage = () => {
  const { docs: collections } = useFirestore("posts");

  return (
    <div>
      <NavBar />
      {collections && <Grid collections={collections} />}
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
