import React from "react";
import { Link } from "react-router-dom";

const Solutions = () => (
  <div className="font-sans">
    {/* Header Section */}
    <section
      className="py-16 text-center bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://comsol.co.za/img/solutions-bg-01.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0bg-opacity-40" ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Explore our solutions
        </h1>
      </div>
      <div className="h-px bg-gray-300 "></div>
    </section>

    {/* Description Section */}
    <section className="py-12 text-center mt-10 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl max-w-4xl mx-auto text-[#001f3f] animate-fade-in">
          Power your business with our high-performance connectivity solutions,
          from Fixed Wireless Access for reliable business connectivity to
          Private Networks for secure, mission-critical operations.
        </p>
      </div>
      <div className="h-px bg-gray-300 divider-l"></div>
    </section>

    {/* Solutions Section */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fixed Wireless Access */}
          <div className="relative rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all solutions-flex duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center min-w-50"
              style={{
                backgroundImage:
                  'url("https://comsol.co.za/img/solutions-cx-02.jpg")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative p-6 text-white flex flex-col justify-center items-center h-64"></div>
          </div>

          {/* Private Networks */}
          <div className="relative rounded-lg overflow-hidden hover:shadow-lg solutions-flex hover:scale-105 transition-all duration-300">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://comsol.co.za/img/solutions-pvt-01.jpg")',
                  backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative p-6 text-white flex flex-col justify-center items-center h-64"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Solutions;
