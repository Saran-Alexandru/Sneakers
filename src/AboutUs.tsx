import Navbar from "./components/Navbar";

import photo_1 from "./assets/photo-1.avif";
import photo_2 from "./assets/photo-2.avif";
import photo_3 from "./assets/photo-3.avif";
import photo_4 from "./assets/photo-4.avif";

const colors = ["#111827"];

const AboutUs = () => {
  const currentColor = colors[0];

  // Informațiile echipei
  const teamMembers = [
    {
      name: "John Doe",
      imageSrc: photo_1,
      phone: "+123 456 7890",
      email: "johndoe@email.com",
      function: "General Manager",
    },
    {
      name: "Jane Smith",
      imageSrc: photo_2,
      phone: "+123 456 7891",
      email: "janesmith@email.com",
      function: "Senior Manager",
    },
    {
      name: "Mark Johnson",
      imageSrc: photo_3,
      phone: "+123 456 7892",
      email: "markjohnson@email.com",
      function: "Supervisor",
    },
    {
      name: "Emily Davis",
      imageSrc: photo_4,
      phone: "+123 456 7893",
      email: "emilydavis@email.com",
      function: "Supervisor",
    },
  ];

  return (
    <div className="">
      <Navbar currentColor={currentColor} />

      {/* Titlul About Us */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#111827] mt-28 md:mt-[8.5rem]">
        About Us
      </h1>

      {/* Descriere */}
      <p className="mx-6 md:mx-auto mt-4 text-base md:text-lg text-center text-gray-600 md:w-[80%] lg:w-[42%]">
        We are passionate about sneaker design and comfort, offering
        high-quality products for all tastes. With a focus on innovation and
        style, we are dedicated to bringing the latest trends in athletic
        footwear, ensuring that each pair combines comfort with performance.
        Join our community and find your perfect pair!
      </p>

      {/* Secțiunea Our Team */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#111827] mt-12">
          Our Team
        </h2>
        <div className="mt-6 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6 sm:px-12 md:w-[90%] lg:w-[70%]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] rounded-full object-cover mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
                {member.name}
              </h3>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                {member.phone}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {member.email}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {member.function}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
