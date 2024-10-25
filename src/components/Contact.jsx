import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div id="contactme" className="w-full px-6 py-10  bg-gray-800">
      <h2 className="text-3xl font-semibold text-yellow-50 text-center">Contact Me</h2>
      <p className="mt-2 text-yellow-50 text-center">
        Feel free to reach out for collaborations or inquiries.
      </p>

      
      <div className="flex justify-center mt-8 ">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-yellow-50">Get in Touch</h3>
          <p className="mt-2 text-yellow-50">chdsahil237@gmail.com</p>
          <p className="mt-1 text-yellow-50">+91 9872436996</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.instagram.com/chhokruaa?igsh=NDJlajJheHJiNjVl"  className="text-gray-600 hover:text-pink-600">
              <FaInstagram size={30} />
            </a>
            <a href=" https://wa.me/9872436996?"   className="text-gray-600 hover:text-green-600">
              <FaWhatsapp size={30} />
            </a>
            <a href="https://twitter.com"   className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="mailto:chdsahil237@gmail.com" className="text-gray-600 hover:text-red-600">
              <FaEnvelope size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009864552868"   className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
