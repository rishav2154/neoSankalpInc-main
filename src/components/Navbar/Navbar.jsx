import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink as LinkDirect } from "react-router-hash-link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={`sticky bg-white mx-auto rounded-2xl top-4 max-md:top-0 max-md:mx-0 max-md:w-full w-11/12 z-50 bg-opacity-70 backdrop-blur-md shadow-2xl ${
          location.pathname === "/call" && "py-3"
        }`}
      >
        <div className="flex justify-between items-center max-xl:px-12 max-lg:px-5 max-[1095px]:flex-col max-lg:space-y-5 max-md:space-y-0 max-lg:py-2 max-md:py-5">
          <div className="max-md:w-full max-md:flex max-md:items-center max-md:justify-between max-md:z-50">
            <div className="rounded-lg px-6 max-[500px]:px-0">
              <Link
                to="/"
                className="font-oswald text-3xl font-semibold"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <span className="navLogo text-secondary">Neo</span>Sankalp
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="hidden max-md:block bg-accent px-2 py-1 rounded-md"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-gray-900" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-900" /> //menu icon
              )}
            </button>
          </div>

          <ul
            className={`navbarList flex gap-10 px-10 py-2 rounded-xl max-md:absolute max-md:left-0 max-md:w-full max-md:flex-col max-md:items-center max-md:py-5 max-md:pt-[10vh] transition-all duration-300 ${
              isMenuOpen
                ? "max-md:opacity-100 bg-white max-md:visible max-md:top-0 max-md:z-30"
                : "max-md:-top-[120%] max-md:opacity-0 max-md:invisible"
            }`}
          >
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#about"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                About
              </LinkDirect>
            </li>
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#services"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Services
              </LinkDirect>
            </li>
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#work"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Work
              </LinkDirect>
            </li>
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#benefits"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Benefits
              </LinkDirect>
            </li>
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#faq"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                FAQs
              </LinkDirect>
            </li>
            <li className="navLinksLi hover:text-secondary">
              <LinkDirect
                smooth
                to="/#team"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Team
              </LinkDirect>
            </li>
            <li className="hidden max-md:block">
              <Link to="/call">
                <button
                  className="bg-gray-100 border-2 border-primary text-md text-text hover:bg-secondary hover:text-white transition-all  px-5 duration-500 py-2 rounded-full font-normal"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  Talk to Us
                </button>
              </Link>
            </li>
          </ul>
          {location.pathname === "/call" ? (
            ""
          ) : (
            <Link to="/call">
              <button className="max-lg:hidden my-4 mr-4 bg-gray-100 border-2 border-primary text-md text-text hover:bg-secondary hover:text-white transition-all  px-5 duration-500 py-2 rounded-full font-normal">
                Talk to Us
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
