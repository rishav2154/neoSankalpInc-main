import React from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const services = [
    {
      id: 1,
      title: "Software / Web Development",
      description: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Mobile Application Development",
        "API Integration & Development",
      ],
      img: "img6",
    },
    {
      id: 2,
      title: "Design & Multimedia Services",
      description: [
        "Graphic Design",
        "Branding & Logo Design",
        "UI/UX Design",
        "Motion Graphics",
      ],
      img: "img7",
    },
    {
      id: 3,
      title: "Server Solutions",
      description: [
        "Server Installation & Configuration",
        "LAN Configuration",
        "Backup Solutions & Data Recovery",
        "Software Installation & Management",
      ],
      img: "img8",
    },
    {
      id: 4,
      title: "Virtual Reality Development",
      description: [
        "VR Application Development",
        "3D Modeling & Animation",
        "Immersive User Experiences",
        "Motion Tracking & Interactivity",
      ],
      img: "img9",
    },
  ];

  return (
    <div className="py-12 px-32 max-xl:px-12 max-lg:px-5" id="services">
      <div>
        <h2
          className="text-6xl max-[500px]:text-4xl text-text font-medium text-center mb-8"
          data-aos="fade-right"
        >
          Our Services
          <span className="text-secondary ml-3">Include</span>
        </h2>
      </div>
      <hr className="mb-10 bg-gray-500 h-[1.5px]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-accent max-lg:w-[450px] min-h-[400px] max-md:w-full cursor-pointer shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 relative max-[400px]:p-2"
            data-aos="fade-up"
          >
            <div className="flex w-full justify-between">
              <h3 className="text-3xl font-light mb-4 text-left max-sm:text-2xl">
                {service.title}
              </h3>
              <img
                src={assets[service.img]}
                alt={service.title}
                className="w-52 h-52 mb-4 max-sm:w-40 max-sm:h-40 max-[400px]:h-24 max-[400px]:w-24"
                data-aos="slide-right"
              />
            </div>
            <div className="flex cursor-pointer flex-wrap justify-start gap-2">
              {service.description.map((item, index) => (
                <span
                  key={index}
                  className="bg-background text-gray-700 hover:text-secondary text-base px-3 py-1 rounded-full shadow hover:animate-shake transition-all max-lg:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="absolute right-3 bottom-3 max-[400px]:right-1 max-[400px]:bottom-1">
              <BiArrowBack className="rotate-180 bg-white hover:text-white hover:bg-secondary rounded-full p-2 text-4xl transition-all duration-300 hover:scale-125 cursor-pointer max-[400px]:text-3xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
