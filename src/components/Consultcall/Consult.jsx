import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
const WebMailKey = import.meta.env.VITE_WEB3FORMAPI;

const ConsultCall = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [result, setResult] = React.useState("");
  const [action, setAction] = React.useState("");

  // form to mail
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", WebMailKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your consultation request has been submitted.");
      setAction(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong");
      setAction(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      {/* Main Section */}
      <div
        className="flex flex-col items-center justify-center p-8 border border-orange-300 rounded-lg bg-white shadow-sm my-24 mx-32 max-xl:mx-12 max-lg:mx-5"
        data-aos="fade-up"
        id="consult"
      >
        <h2 className="text-7xl max-xl:text-6xl max-lg:text-5xl max-[500px]:text-4xl max-[400px]:text-3xl font-medium text-center text-secondary">
          Start Your Journey
        </h2>
        <p className="mt-2 text-center text-5xl max-xl:text-4xl max-lg:text-3xl max-[500px]:text-2xl max-[400px]:text-xl font-normal text-text">
          by booking a free consultation call with us
        </p>
        <button
          className="my-10 max-sm:mb-0 bg-transparent border-2 border-primary text-xl max-xl:text-lg max-lg:text-base max-[500px]:text-sm max-[400px]:text-xs text-text hover:bg-secondary hover:text-white transition-all px-5 duration-500 py-2 rounded-full font-normal"
          onClick={() => setShowPopup(true)}
        >
          Book a free call
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed top-0 left-0 z-30 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
          onClick={() => setShowPopup(false)}
        >
          <section
            className="flex justify-center items-center w-[70%] max-sm:w-11/12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-5xl flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Contact Links */}
              <div className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center items-center text-white">
                <h1 className="text-secondary text-xl">NeoSankalp</h1>
                <h2 className="text-4xl font-bold text-center">CONTACT</h2>
                <div className="flex flex-wrap justify-center mt-6">
                  <a
                    href="https://www.linkedin.com/company/neosankalp/"
                    target="blank"
                  >
                    <div className="m-3 bg-[#ff6e616c] p-3 text-2xl rounded-full  cursor-pointer text-white hover:scale-110 transition-transform drop-shadow-lg">
                      <BsLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/neosankalp.official/"
                    target="black"
                  >
                    <div className="m-3 bg-[#ff6e616c] p-3 text-2xl rounded-full  cursor-pointer text-white hover:scale-110 transition-transform drop-shadow-lg">
                      <BsInstagram />
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full md:w-1/2 bg-white p-8">
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      name="Sender Mail"
                      required
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="Phone Number"
                      required
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      name="Message"
                      required
                      className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div className="flex gap-10 my-5">
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-3 rounded-md hover:scale-105 transition-transform shadow-lg"
                    >
                      Send
                    </button>
                    <button
                      type="submit"
                      className="w-full bg-slate-500 text-white py-3 rounded-md hover:scale-105 transition-transform shadow-lg"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  <span
                    className={`${
                      action === true ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {result}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ConsultCall;
