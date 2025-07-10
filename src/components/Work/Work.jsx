import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const portfolioItems = [
    {
      id: 1,
      img: "work1",
    },
    {
      id: 2,
      img: "work2",
    },
    {
      id: 3,
      img: "work3",
    },
    {
      id: 4,
      img: "work4",
    },
  ];

  return (
    <div className="py-16 px-32 max-xl:px-12 max-lg:px-5 bg-white" id="work">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2
          className="text-6xl max-[500px]:text-4xl text-text font-medium text-center mb-8"
          data-aos="fade-right"
        >
          Check Out
          <span className="text-secondary ml-3">Our Portfolios</span>
        </h2>
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-24 max-lg:px-5 max-sm:gap-2 max-sm:px-0">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            data-aos="zoom-in"
          >
            <div className="relative">
              <img src={assets[item.img]} className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center my-8">
        <Link to="/work">
          <button className="bg-transparent border-2 border-primary text-xl text-text hover:bg-secondary hover:text-white transition-all  px-5 duration-500 py-2 rounded-full font-normal max-lg:text-base">
            View More
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Work;
