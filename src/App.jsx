import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Call from "./pages/Call/Call";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Work from "./pages/Work/Work";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="font-poppins">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/call" element={<Call />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}
