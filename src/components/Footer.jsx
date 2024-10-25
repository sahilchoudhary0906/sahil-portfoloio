import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Sahil | Front-End Developer</h3>
        <div className="flex space-x-4 mb-4">
          <a href="https://www.instagram.com/chhokruaa?igsh=NDJlajJheHJiNjVl"  className="hover:text-pink-500">
            <FaInstagram size={30} />
          </a>
          <a href=" https://wa.me/9872436996?" className="hover:text-green-500">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter size={30} />
          </a>
          <a href="mailto:chdsahil237@gmail.com" className="hover:text-red-500">
            <FaEnvelope size={30} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009864552868"   className="hover:text-blue-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://github.com/sahilchoudhary0906" className="hover:text-gray-300">
            <FaGithub size={30} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sahil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
