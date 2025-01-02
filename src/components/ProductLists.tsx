import image_1 from "../assets/shop/image-1.jpg";
import image_2 from "../assets/shop/image-2.jpg";
import image_3 from "../assets/shop/image-3.jpg";
import sneakers_blue1 from "../assets/sneakers-blue1.png";
import sneakers_orange1 from "../assets/sneakers-orange1.png";
import sneakers_yellow1 from "../assets/sneakers-yellow1.png";
import sneakers_green1 from "../assets/sneakers-green1.png";

const ProductLists = () => {
  const products = [
    {
      id: 1,
      name: "Dynamic Sport Footwear",
      href: "#",
      imageSrc: image_1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$125",
      color: "Orange and White",
      discount: 20,
    },
    {
      id: 2,
      name: "Bold Orange Sneakers",
      href: "#",
      imageSrc: image_2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$110",
      color: "Orange and White",
      discount: 0,
    },
    {
      id: 3,
      name: "Ocean Breeze Sneakers",
      href: "#",
      imageSrc: image_3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$90",
      color: "White and Blue",
      discount: 40,
    },
    {
      id: 1,
      name: "Green Sneaker",
      href: "#",
      imageSrc: sneakers_green1,
      imageAlt: "Green sneaker, front view.",
      price: "$150",
      color: "Green",
      discount: 20,
    },
    {
      id: 2,
      name: "Blue Sneaker",
      href: "#",
      imageSrc: sneakers_blue1,
      imageAlt: "Blue sneaker, front view.",
      price: "$140",
      color: "Blue",
      discount: 21,
    },
    {
      id: 3,
      name: "Orange Sneaker",
      href: "#",
      imageSrc: sneakers_orange1,
      imageAlt: "Orange sneaker, front view.",
      price: "$130",
      color: "Orange",
      discount: 23,
    },
    {
      id: 4,
      name: "Yellow Sneaker",
      href: "#",
      imageSrc: sneakers_yellow1,
      imageAlt: "Yellow sneaker, front view.",
      price: "$160",
      color: "Yellow",
      discount: 0,
    },
    // More products...
  ];

  return (
    <div className="bg-white">
      <div className="sm:ml-[255px] sm:px-6 sm:py-24 mt-[3rem] max-w-[1331px] lg:px-10">
        <h2 className="text-3xl sm:text-5xl text-grafont-mono font-bold text-[#111827] mb:w-[442px]">
          Explore the Sneaker Collection
        </h2>

        <div className="mt-6 mb-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => {
            const originalPrice = parseFloat(product.price.replace("$", ""));
            const discountedPrice =
              originalPrice - originalPrice * (product.discount / 100);

            return (
              <div
                key={product.id}
                className="border border-solid border-[#2825464b] rounded-lg"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 rounded-tl-lg rounded-tr-lg"
                />
                <div className="mt-5 ml-5 flex flex-col justify-between ">
                  <div>
                    <h3 className="text-base text-gray-700">
                      <a
                        href={product.href}
                        className="font-semibold text-[22px] sm:text-[22px]"
                      >
                        <span aria-hidden="true" className="" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-[18px] sm:text-[18px]  text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-[13px]">
                    {product.discount > 0 ? (
                      <>
                        {/* Prețul original va fi la stânga, cu linia tăiată */}
                        <p className="text-[20px] sm:text-[20px] font-medium italic text-gray-900 line-through">
                          {product.price}
                        </p>
                        {/* Prețul cu discount va fi la dreapta */}
                        <p className="text-[20px] sm:text-[20px] font-semibold text-[#2563EB]">
                          ${discountedPrice.toFixed(2)}
                        </p>
                      </>
                    ) : (
                      <p className="text-[20px] sm:text-[20px] font-semibold text-gray-900">
                        {product.price}
                      </p>
                    )}
                  </div>
                </div>

                {/* Adăugarea butonului "Buy Now" */}
                <div className="mt-4 ml-5 mb-5">
                  <a
                    href={product.href}
                    className="inline-block font-semibold px-6 py-2 bg-[#111827] text-white text-sm rounded-md hover:bg-[#3f4964] transition duration-200"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
