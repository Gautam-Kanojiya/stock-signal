// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Wells Fargo. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <a href="/contact-us" className="hover:underline">Contact Us</a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center">
        <p className="text-sm">Developed by CMT-1</p>
      </div>
    </footer>
  );
};

export default Footer;
