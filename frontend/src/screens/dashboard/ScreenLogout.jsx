import React from "react";
import { Link } from "react-router-dom";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

export default function ScreenLogout() {
  return (
    <section className="bg-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Heading + Button in Flex */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Left: Heading + Paragraph */}
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Inventory Management
            </h2>
            <p className="text-gray-700 text-lg">
              Hotel is a comprehensive solution that enables businesses to
              manage their inventory, sales, and customer information in a
              single platform. The system is designed to simplify and streamline
              business operations, from tracking product stock levels to
              processing sales transactions and managing customer schedules.
            </p>
          </div>

          {/* Right: Login Button */}
          <div className="md:w-1/3 flex md:justify-end">
            <Link
              to="auth"
              className="px-6 py-3 rounded-md text-lg bg-blue-700 text-white transition"
            >
              Login Now
            </Link>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="bg-gray-900 text-white p-3 rounded-lg text-3xl">
            <SiAdobephotoshop />
          </div>
          <div className="bg-gray-900 text-white p-3 rounded-lg text-3xl">
            <FaFigma />
          </div>
          <div className="bg-gray-900 text-white p-3 rounded-lg text-3xl">
            <SiAdobexd />
          </div>
        </div>

        {/* Screenshot Image with matching size */}
        <div className="w-full sm:w-[700px] md:w-[1000px] lg:w-[1200px] h-[500px] shadow-2xl rounded-xl overflow-hidden mx-auto">
          <img
            src="/screenshot.png"
            alt="Inventory Dashboard"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
