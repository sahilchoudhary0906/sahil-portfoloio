
import React from 'react';

const Home = () => {
    
  return (
    <div className="relative flex flex-col  justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('./src/sahil.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50" />
      <div className="relative z-10 text-left p-4">
        <h1 className="text-8xl font-bold text-white animate-fadeIn">Sahil</h1>
        <p className="mt-2 text-4xl text-white animate-slideUp  delay-200 text-right">Front-End Developer</p>
      </div>
    </div>
  );
};

export default Home;
