import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-100 to-gray-200 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

           <div className="text-2xl font-bold text-gray-800">
            Huii
          </div>

           <div className="flex gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          
          <p className="text-gray-500 text-sm">
            © 2026 Huii. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;