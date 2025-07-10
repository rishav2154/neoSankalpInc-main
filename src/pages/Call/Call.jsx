import React, { useEffect } from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { assets } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Call = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
  }, []);
  return (
    <section className="h-screen overflow-hidden bg-gradient-to-t from-purple-100 to-white pt-[15vh] px-32 relative max-sm:px-5">
      <div className="absolute top-60 right-10 max-sm:top-72">
        <img
          src={assets.arrow1}
          alt="Arrow Design"
          className="shaking h-32 w-32 max-lg:h-24 max-lg:w-24 max-sm:hidden"
        />
      </div>
      <div className="absolute bottom-20 left-16">
        <img
          src={assets.arrow2}
          alt="Arrow Design"
          className="shaking h-32 w-32 max-lg:h-24 max-lg:w-24 max-[500px]:hidden"
        />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 max-[500px]:text-3xl">
          Get Started With a Free Consultation Call <br /> With{" "}
          <span className="text-blue-600">US</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-lg max-[500px]:text-base">
          If you also want to make an APP for your startup then book free <br />
          consultancy today and let's start your startup together.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex justify-center gap-4 max-[680px]:flex-col">
          <a
            href="https://wa.me/9718189785"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 max-[680px]:flex max-[680px]:justify-center max-[450px]:text-sm max-[450px]:font-medium"
          >
            <BsWhatsapp className="max-md:text-3xl max-[450px]:text-xl" />
            Message us on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/neosankalp.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all duration-300 max-[680px]:flex max-[680px]:justify-center max-[450px]:text-sm max-[450px]:font-medium"
          >
            <BsInstagram className="max-md:text-3xl max-[450px]:text-xl" />
            Message us on Instagram
          </a>
        </div>
      </div>

      {/* Mobile App Screens */}
      <div className="flex w-full px-32 max-lg:px-5 py-10 justify-center items-center gap-10 min-h-[60vh]">
        <div className="flex h-full justify-end">
          <img src={assets.phone1} alt="" className="w-4/5 max-md:hidden" />
        </div>
        <div className="flex h-full max-md:justify-center">
          <img
            src={assets.phone2}
            alt=""
            className="max-md:w-4/5 max-sm:w-2/5 max-[520px]:w-[90%]"
          />
        </div>
        <div className="flex h-full">
          <img src={assets.phone3} alt="" className="w-4/5 max-md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Call;
