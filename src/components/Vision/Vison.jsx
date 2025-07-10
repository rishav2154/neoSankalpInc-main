import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const dataList = [
    {
      id: 1,
      title: "Figure out what you need",
      description:
        "Book a free consultation to explore how Neo Sankalp can help. If it’s a great fit, we’ll get started the same day! 🚀",
      img: "img3",
    },
    {
      id: 2,
      title: "Design & Build with Ease",
      description:
        "Request unlimited designs and let Neo Sankalp bring your vision to life—first drafts delivered in under 48 hours! 🚀",
      img: "img4",
    },
    {
      id: 3,
      title: "We Make It Work",
      description:
        "We aim for perfection on the first take, but you can request unlimited revisions until you're satisfied—at no extra cost! 🚀",
      img: "img5",
    },
  ];

  return (
    <div className="space-y-28 px-32 max-xl:px-12 max-lg:px-5 overflow-hidden" id="about">
      <h2
        className="text-6xl max-[500px]:text-4xl font-normal text-center mb-8 leading-snug"
        data-aos="fade-in"
      >
        How We'll Bring Your{" "}
        <span className="text-secondary">Vision to Life</span>
      </h2>
      <div
        className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:place-items-center gap-8"
        data-aos="fade-up"
      >
        {dataList.map((data) => (
          <div
            key={data.id}
            className="bg-slate-50 border border-slate-100 rounded-lg p-6 flex flex-col items-center text-center max-w-[400px] max-xl:max-w-[300px] max-md:max-w-full max-md:flex-row max-md:w-full"
          >
            <img
              src={assets[data.img]}
              alt={data.title}
              className="w-52 h-52 mb-4 max-sm:w-36 max-sm:h-36"
            />
            <div>
              <h3 className="text-lg w-full text-left font-normal mb-2 max-sm:text-base">
                {data.title}
              </h3>
              <p className="text-text w-full text-left font-light text-base max-sm:text-sm">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1
          className="text-3xl w-3/4 mx-auto my-10 max-[400px]:text-2xl text-center"
          data-aos="fade-up-left"
        >
          At <span className="text-secondary">Neo Sankalp</span>, we go beyond
          the ordinary to deliver excellence at every step. Our service model is
          built around your needs, ensuring seamless solutions and satisfaction.
        </h1>
      </div>
    </div>
  );
};

export default Vision;
