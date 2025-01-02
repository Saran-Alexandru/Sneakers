import ProductLists from "./ProductLists";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <div className="px-6 sm:px-6 pt-6 lg:px-8">
      {/* Main container for Hero and Slider */}
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {/* Hero Content */}
        <div className="max-w-full sm:max-w-4xl mx-auto pt-20 sm:py-24 lg:w-[100%] sm:pl-[277px] sm:pt-[253px]">
          <div className="text-left sm:text-left">
            {/* Title */}
            <h1 className="font-sans text-stroke-medium tracking-wide text-gray-900 text-3xl sm:text-6xl leading-tight sm:leading-tight">
              Futuristic Design for Peak Performance Excellence
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 w-full sm:w-[600px] mx-auto sm:mx-0 font-oswald text-base sm:text-lg text-gray-500 text-left sm:text-left leading-relaxed">
              These sneakers combine futuristic style with advanced technology,
              delivering exceptional comfort, innovative cushioning, and
              optimized performance for any athletic activity.
            </p>

            {/* Button */}
            <div className="mt-0 sm:mt-8 flex justify-left sm:justify-start">
              <Link
                to="/products"
                className="hidden sm:flex rounded-md bg-[#111827] text-[14px] sm:text-[16px] w-[120px] sm:w-[132px] h-[45px] sm:h-[51px] justify-center items-center font-semibold text-white shadow-sm hover:bg-[#3f4964] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop New
              </Link>
            </div>
          </div>
        </div>

        {/* ImageSlider Section */}
        <div className="mt-8 sm:mt-[111px] lg:w-1/2">
          <ImageSlider />
        </div>
      </div>

      {/* Product List */}
      <div className="mt-8">
        <ProductLists />
      </div>
    </div>
  );
};

export default Hero;
