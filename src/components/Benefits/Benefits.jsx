import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "🚀 Rapid Delivery",
    description:
      "Quick turnaround times for CMS, branding, websites, and marketing projects without compromising quality.",
    img: "img9",
  },
  {
    title: "💰 Clear Pricing",
    description:
      "Fixed, transparent pricing model with no hidden fees. Adjust or pause services anytime to fit your goals.",
    img: "img10",
  },
  {
    title: "🎨 High-Impact Design",
    description:
      "Visually stunning and performance-driven designs that boost engagement and conversions.",
    img: "img11",
  },
  {
    title: "📞 Seamless Communication",
    description:
      "Stay updated with real-time Slack updates, regular check-ins, and direct access to our team.",
    img: "img12",
  },
  {
    title: "🎯 Tailored Solutions",
    description:
      "Custom solutions aligned with your brand vision, from rebranding to targeted marketing strategies.",
    img: "img13",
  },
  {
    title: "📈 Scalable Growth",
    description:
      "We scale services to match your growth—expanding digital presence, refining branding, and amplifying marketing.",
    img: "img14",
  },
];

const Benefits = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div
      className="relative bg-gray-950 text-white py-20 px-8 overflow-hidden"
      id="benefits"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl max-sm:font-semibold font-extrabold text-white mb-16 tracking-tight"
          data-aos="fade-up"
        >
          Why work <span className="text-[#ff6b6b]">with Neosankalp?</span>
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              data-aos="zoom-in"
            >
              {/* Icon Badge */}
              <div className="absolute -top-7 left-5 bg-[#ff6b6b] text-white p-3 rounded-full shadow-lg text-2xl">
                {feature.title.split(" ")[0]}
              </div>

              {/* Image + Content */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <img
                    src={assets[feature.img]}
                    alt={feature.title}
                    className="w-32 h-32 rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-white opacity-5 blur-lg rounded-lg"></div>
                </div>

                <h3 className="text-2xl font-semibold text-white text-center">
                  {feature.title.replace(/^\S+/, "")}
                </h3>
                <p className="text-gray-300 text-base text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 w-full h-full bg-[#ff6b6b] opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
