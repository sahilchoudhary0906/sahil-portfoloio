// src/components/About.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="w-full px-6 py-10 text-center bg-white">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Me</h2>
      <div className="container flex items-center md:flex-row md:justify-center">
        <div className="img mb-4 md:w-96 animate-slideUp">
          <img src="./sahilformal.jpg" alt="Sahil" className='rounded-3xl' />
        </div>
        <div className='text'>
          <p className="text-gray-600">
            I'm Sahil, a passionate Front-End Developer with a knack for creating beautiful and functional user interfaces. 
            I specialize in building responsive and interactive web applications that provide an excellent user experience.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <a href="https://www.instagram.com/chhokruaa?igsh=NDJlajJheHJiNjVl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
          <FaInstagram size={30} />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:chdsahil237@gmail.com" className="text-gray-600 hover:text-red-600">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100009864552868" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaFacebook size={30} />
        </a>
      </div>
    </div>
  );
};

export default About;
