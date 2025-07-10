import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="bg-text text-white py-8 px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h1 className="text-4xl font-medium text-secondary">NeoSankalp</h1>
        </div>
        <div className="mt-6 lg:mt-0">
          {location.pathname === "/call" ? (
            <p className="font-medium">
              <span className="text-secondary font-medium">Neo</span>Sankalp –
              Innovating for a better tomorrow,
              <br /> one solution at a time!
            </p>
          ) : (
            <div>
              <h3 className="text-xl font-semibold">
                Get started with a free consultation call
              </h3>
              <a
                onClick={() => {
                  scrollTo(0, 0), navigate("/call");
                }}
              >
                <button className="mt-4 px-6 py-2 bg-secondary text-black font-semibold rounded-full hover:bg-[#d64639] hover:text-white transition duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 gap-5 flex flex-col lg:flex-row justify-between">
        {/* Contact Info */}
        <div className="mb-6 lg:mb-0">
          <h4 className="font-bold text-base text-secondary">Contact</h4>
          <p className="mt-2 text-sm">Email: contact.neosankalp@gmail.com</p>
          <p className="text-sm">Phone: +91 9718189785</p>
        </div>

        {/* Address Info */}
        <div className="mb-6 lg:mb-0">
          <h4 className="font-bold text-base text-secondary">Address</h4>
          <p className="mt-2 text-sm">
            Rajan Enclave, Uttam Nagar
            <br /> Hastsal Delhi <br />
            110059
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm">
          Copyright © 2025 Neosankalp All Rights Reserved
        </p>

        {/* Social Media Links */}
        <div className="flex mt-4 lg:mt-0 gap-4">
          <a
            href="https://www.instagram.com/neosankalp.official/"
            className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
            target="blank"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/neosankalp/"
            className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
            target="blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
