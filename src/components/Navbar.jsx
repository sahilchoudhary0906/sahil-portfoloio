import React, { useState } from 'react';

const Navbar = () => {
  const [tabs] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact Me", link: "#contactme" },
  ]);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50 shadow-md hover:bg-slate-500 hover:font-bold">
      <nav className="flex justify-center space-x-8">
        {tabs.map((tab, index) => (
          <a
            href={tab.link}
            key={index}
            className="text-white text-lg font-medium relative transition duration-300 hover:scale-110"
          >
            {tab.name}
            
          </a>
        ))}
        <a
          href="./sahil resume  .pdf" 
          download 
          className="text-white text-lg font-medium relative transition duration-300 hover:scale-110"
        >
          Download Resume
          
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
