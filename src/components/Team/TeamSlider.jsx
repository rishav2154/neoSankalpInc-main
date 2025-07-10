import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { assets } from "../../assets/assets";
import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export default function TeamSlider() {
  const teamMembers = [
    {
      name: "Kandarp",
      position: "CEO & Founder",
      image: "teamImg7",
      info: "Leading NeoSankalp's digital transformation journey.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/kandarp-kumar-thakur/",
      },
    },
    {
      name: "Sparsh",
      position: "Development Manager",
      image: "teamImg5",
      info: "Overseeing software development projects at NeoSankalp.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/sparsh-pant-5b401523b",
      },
    },
    {
      name: "Himanshi",
      position: "Head of Business Development",
      image: "teamImg3",
      info: "Managing business growth and development strategies.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/himanshi-chawla-03285320b",
      },
    },
    {
      name: "Sanchit",
      position: "Full Stack Developer",
      image: "teamImg4",
      info: "Handling both frontend and backend development tasks.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/sanchit-trikha-22a622209/",
      },
    },
    {
      name: "Utkarsh",
      position: "Marketing Strategist",
      image: "teamImg6",
      info: "Planning and executing marketing campaigns.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/utkarsh-utkarsh-942442321/",
      },
    },
    {
      name: "Aniket",
      position: "Social Media Manager",
      image: "teamImg1",
      info: "Managing NeoSankalp’s social media presence.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/aniket-tomar-a17954250/",
      },
    },
    {
      name: "Garv",
      position: "Client Relations Specialist",
      image: "teamImg2",
      info: "Handling client communication and relations.",
      social: {
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/garv-taneja-819983285",
      },
    },
    {
      name: "Dhruv",
      position: "Frontend Web Developer",
      image: "teamImg8",
      info: "Building and optimizing user-friendly web interfaces.",
      social: {
        portfolio: "https://dhruvpalportfolio.vercel.app/",
        linkedin: "https://www.linkedin.com/in/dhruv1086k/",
      },
    },
  ];

  return (
    <>
      <div
        className="container mx-auto px-32 max-xl:px-16 max-sm:px-2"
        id="team"
      >
        <h2
          className="text-6xl max-[500px]:text-4xl text-text font-medium text-center mb-8"
          data-aos="fade-right"
        >
          Our
          <span className="text-secondary ml-3">Team</span>
        </h2>
        <h3 className="caption gray text-gray-500 max-sm:px-2 text-center mb-5">
          Meet the people who make awesome stuffs
        </h3>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            800: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative h-[550px] min-w-[300px] bg-cover bg-center rounded-2xl shadow-2xl scale-90 hover:scale-95 transition-transform duration-300 overflow-hidden"
                style={{
                  backgroundImage: `url('${assets[member.image]}')`,
                }}
              >
                <h1 className="text-secondary text-[50px] font-bold text-center transition-all duration-200 drop-shadow-lg -translate-y-72 group-hover:translate-y-72">
                  {member.name}
                </h1>

                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-[rgba(0,0,0,0.01)] via-black/100 to-black rounded-b-2xl flex items-end px-5 pb-5 justify-between">
                  <div className="text-white">
                    <p className="text-white font-bold text-xl">
                      {member.position}
                    </p>
                    <div className="flex gap-5 py-2">
                      <a
                        href={member.social.linkedin}
                        className="text-2xl text-blue-500 bg-white p-2 rounded-lg"
                        target="blank"
                      >
                        <BsLinkedin />
                      </a>
                    </div>
                    <p className="font-medium">{member.info}</p>
                    <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent my-2"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-14 space-x-4 mb-5">
          <button className="custom-prev bg-secondary text-white px-4 py-2 rounded-full hover:bg-[#d64c40] shadow-lg">
            <BiSolidLeftArrow />
          </button>
          <button className="custom-next bg-secondary text-white px-4 py-2 rounded-full hover:bg-[#d64c40] shadow-lg">
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </>
  );
}
