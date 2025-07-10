import confetti from "canvas-confetti";
import { assets } from "../../assets/assets";

export default function Hero() {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex pt-[5vh] px-32 max-xl:px-12 max-lg:px-5 max-sm:flex-col">
          <div className="w-3/5 h-full max-sm:w-full">
            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl mt-10 leading-tight font-normal">
              Your One-Stop{" "}
              <span className="text-primary">Solution—Bringing</span> All Your
              Tech, Media, and <span className="text-primary">Digital </span>
              Needs Under One Roof. Simplifying Tech,{" "}
              <span className="text-primary">Amplifying</span> Impact. Crafting
            </h1>
            <div className="max-xl:flex max-sm:hidden">
              <img
                src={assets.img1}
                alt=""
                className="image w-[80%] max-xl:h-86 max-md:h-80 pr-10"
              />
            </div>
          </div>
          <div className="w-2/5 h-full max-sm:w-full">
            <div className="flex justify-end">
              <img src={assets.img2} alt="" className="w-9/12 mt-2 image" />
            </div>
            <h3 className="w-4/5 max-sm:w-4/5 text-justify text-lg mb-5 max-lg:text-base max-sm:text-justify">
              Unleash your brand's potential with Neo Sankalp’s all-in-one
              solutions. Get unlimited tech, media, and digital marketing
              services—all under one roof, for seamless growth. Simplifying
              Tech, Amplifying Impact.
            </h3>
            <a href="#consult">
              <button className="bg-transparent border-2 border-primary text-xl text-text hover:bg-secondary hover:text-white transition-all  px-5 duration-500 py-2 rounded-full font-normal max-lg:text-base">
                Book a free Trial
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
