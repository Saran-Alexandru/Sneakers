import { useState } from "react";
import { Link } from "react-router-dom";
import ShopShow from "./Cart";

import cart_icon from "../assets/shop-icon.png";
import logo from "../assets/logo.png";
import log_icon from "../assets/log-icon.png";

type NavbarProps = {
  currentColor?: string;
};

const Navbar: React.FC<NavbarProps> = ({ currentColor = "black" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopShow = (): void => {
    setShowShop((prev: boolean) => !prev);
  };

  const [showShop, setShowShop] = useState(false);

  return (
    <div
      style={{ backgroundColor: currentColor }}
      className="w-full fixed top-0 left-0 z-10"
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Butonul hamburger pentru mobil */}
        <div className="flex md:hidden w-full justify-between items-center">
          <Link to="/">
            <img
              className="w-[150px] h-auto cursor-pointer"
              src={logo}
              alt="Logo"
              onError={() => console.error("Logo failed to load.")}
            />
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Meniul pentru desktop */}
        <div className="hidden md:flex justify-center items-center w-full">
          <ul className="flex md:flex-row flex-col items-center gap-[68px] text-center md:ml-[275px]">
            <li>
              <Link to="/">
                <img
                  className="w-[150px] h-auto cursor-pointer"
                  src={logo}
                  alt="Logo"
                  onError={() => console.error("Logo failed to load.")}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-mono tracking-[1px] text-stroke-medium text-[20px] text-white hover:text-gray-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="font-mono tracking-[1px] text-stroke-medium text-[20px] text-white hover:text-gray-300"
              >
                PRODUCTS
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                className="font-mono tracking-[1px] text-stroke-medium text-[20px] text-white hover:text-gray-300"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-mono tracking-[1px] text-stroke-medium text-[20px] text-white hover:text-gray-300"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="mx-auto md:mr-9">
            <img
              className="w-[30px] h-auto cursor-pointer"
              src={cart_icon}
              alt="Shop Icon"
              onClick={toggleShopShow}
            />

            {showShop && <ShopShow />}
          </div>
          <Link to="/" className=" ">
            <img
              className="w-[39px] h-auto md:mr-[17.1rem]"
              src={log_icon}
              alt="Logo"
            />
          </Link>
        </div>
      </nav>

      {/* Meniul lateral pe mobil */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed top-0 transition-all duration-300 ease-in-out w-[80%] h-full bg-gray-900 text-white z-20`}
        style={{
          boxShadow: "10px 0 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex flex-col">
          <button
            className="text-white ml-auto mt-6 mr-6 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <Link to="/" className="block mx-auto mt-8">
            <img
              className="w-[170px] h-auto"
              src={logo}
              alt="Logo"
              onError={() => console.error("Logo failed to load.")}
            />
          </Link>

          <ul className="flex flex-col mt-10 space-y-6 px-8 text-center">
            <li>
              <Link
                to="/"
                className="block py-4 text-[20px] font-mono tracking-[1px] text-white hover:text-[#c6cfe9] border-b border-[#fff]"
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-4 text-[20px] font-mono tracking-[1px] text-white hover:text-[#c6cfe9] border-b border-[#fff]"
                onClick={toggleMenu}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-4 text-[20px] font-mono tracking-[1px] text-white hover:text-[#c6cfe9] border-b border-[#fff]"
                onClick={toggleMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-4 text-[20px] font-mono tracking-[1px] text-white hover:text-[#c6cfe9] border-b border-[#fff]"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
