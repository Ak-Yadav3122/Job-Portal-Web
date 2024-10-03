// Footer.js
// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[Yellow]">
            Job<span className="text-[violet]"> Portal</span>
          </h1>
        </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
