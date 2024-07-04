import React from "react";

const HeroSection = () => (
  <div className="  hero-section bg-hero-image">
    <div className="container mx-auto py-20 px-4 md:px-0">
      <section className="text-white p-4 md:p-16 text-center">
        <h1 className="mb-2 font-bold">Are You a Supplier?</h1>
        <h2 className="mb-8 font-normal">Explore Matching Opportunities.</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-5xl mx-auto">
          <div className="relative w-full md:flex-grow">
            <img
              src="/asset/breifcase.svg"
              alt="Briefcase"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search your required service here"
              className="w-full py-3 pl-10 pr-3 rounded text-black"
            />
          </div>
          <div className="relative w-full md:flex-grow mt-2 md:mt-0">
            <img
              src="/asset/location.svg"
              alt="Location"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="w-full py-3 pl-10 pr-3 rounded text-black"
            />
          </div>
          <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded transition duration-300 mt-2 md:mt-0">
            Search
          </button>
        </div>
        <p className="mt-8 font-poppins text-sm md:text-base">
          Are you a buyer?{" "}
          <a href="#" className="underline font-normal hover:text-green-300 transition duration-300">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default HeroSection;
