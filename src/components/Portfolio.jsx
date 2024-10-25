import React, { useState } from 'react';

const Portfolio = () => {
  const [showRollingDice, setShowRollingDice] = useState(false);
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  const [showLoveCalculator, setShowLoveCalculator] = useState(false);
  const [showHealthcareServices, setShowHealthcareServices] = useState(false);

  const handleRollingDiceClick = () => {
    setShowRollingDice((prev) => !prev);
  };

  const handleCurrencyConverterClick = () => {
    setShowCurrencyConverter((prev) => !prev);
  };

  const handleLoveCalcClick = () => {
    setShowLoveCalculator((prev) => !prev);
  };

  const handleHealthcareClick = () => {
    setShowHealthcareServices((prev) => !prev);
  };

  return (
    <div id="portfolio" className="w-full px-6 py-10 text-center bg-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">My Portfolio</h2>
      <p className="mt-4 text-gray-600">
        Here are some of my projects showcasing my skills in front-end development.
      </p>
      <div className="showcasingProjects flex flex-col gap-5">
        
        <div className="first flex items-center">
          <img
            src="./src/assets/rollinglogo.png"
            alt="Rolling Dice"
            className="rounded-3xl w-[350px] hover:scale-90 duration-150 cursor-pointer"
            onClick={handleRollingDiceClick}
          />
          <p className="ml-10 text-3xl font-bold">Rolling Dice</p>
        </div>
        {showRollingDice && (
          <div className={`mt-4 transition-opacity duration-500 ${showRollingDice ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600">
              The Rolling Dice project is a fun and interactive web application that simulates the experience of rolling dice. Users can roll a virtual die with a simple click, and the result is displayed instantly on the screen. This project showcases my ability to create engaging user interfaces and implement basic game logic.
            </p>
          </div>
        )}
        <div className="first flex items-center">
          <img
            src="./src/assets/currencylogo.png"
            alt="Currency Converter"
            className="rounded-3xl w-[350px] hover:scale-90 duration-150 cursor-pointer"
            onClick={handleCurrencyConverterClick}
          />
          <p className="ml-10 text-3xl font-bold">Currency Converter</p>
        </div>
        {showCurrencyConverter && (
          <div className={`mt-4 transition-opacity duration-500 ${showCurrencyConverter ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600">
              The Currency Converter project allows users to convert different currencies in real-time. It provides a user-friendly interface where users can input an amount and select currencies for conversion. The app uses a third-party API to fetch live currency rates, demonstrating my ability to work with APIs and manage state effectively in React.
            </p>
          </div>
        )}
        <div className="second flex items-center">
          <img
            src="./src/assets/lovelogo.png"
            alt="Love Calculator"
            className="rounded-3xl w-[350px] hover:scale-90 duration-150 cursor-pointer"
            onClick={handleLoveCalcClick}
          />
          <p className="ml-10 text-3xl font-bold">Love Calculator</p>
        </div>
        {showLoveCalculator && (
          <div className={`mt-4 transition-opacity duration-500 ${showLoveCalculator ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600">
              The Love Calculator is a fun application that takes two names as input and calculates a love percentage. It uses random algorithms to generate results, making it a humorous way to engage users. This project highlights my skills in form handling and basic calculations in JavaScript.
            </p>
          </div>
        )}
        <div className="first flex items-center">
          <img
            src="./src/assets/healthcare.png"
            alt="Health-Care Services"
            className="rounded-3xl w-[350px] hover:scale-90 duration-150 cursor-pointer"
            onClick={handleHealthcareClick}
          />
          <p className="ml-10 text-3xl font-bold">Health-Care Services</p>
        </div>
        {showHealthcareServices && (
          <div className={`mt-4 transition-opacity duration-500 ${showHealthcareServices ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-600">
              The Health-Care Services project provides a platform where user can add the service and also can edit and delete whenever they want to.
            </p>
          </div>
        )}

        <a href='https://sahilchoudhary0906.github.io/AllHere/' className='hover:text-3xl text-2xl duration-150'>
          Click me to open Those Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
