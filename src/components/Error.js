import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <div
        id="error-page"
        className="text-center w-full text-red-500 text-xl flex flex-col align-items justify-center min-h-[80vh]"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

        <div className="mt-5">
          <Link
            to="/"
            className="text-gray-700 px-5 py-2 hover:opacity-50 bg-yellow-500 rounded-md"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
