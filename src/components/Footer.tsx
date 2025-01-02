import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-10">
      <div className="text-center sm:text-left mx-auto grid grid-cols-1 md:grid-cols-5 gap-[2rem] sm:gap-[10rem] px-6 sm:pl-[20rem] pl-[2.5rem]">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="w-[180px] h-auto cursor-pointer mx-auto sm:w-[240px] md:w-[300px]"
            />
          </Link>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[16px]">
                SNEAKER STORE Romania,Bucharest.
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[16px]">
                0922-221-122
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[16px]">
                company@yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links </h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400 text-[16px]">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-400 text-[16px]">
                Products
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-gray-400 text-[16px]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 text-[16px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social Media</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-40 text-[16px]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-[16px]"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-[16px]"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
