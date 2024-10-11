import React from 'react';
import logo from '../images/IESG LOGO HQ no background.png';
import natureVideo from '../videos/nature-background.mp4';

const IESGLandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-500 via-blue-500 to-green-700 text-white">
      {/* Fullscreen Video Background */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-40 z-0">
        <source src={natureVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <img src={logo} alt="IESG Logo" className="w-32 h-auto mb-8" />
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          Leading the Future of <span className="text-orange-400">ESG Reporting</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-8">
          Harness the power of blockchain for transparent and reliable ESG management.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
          <a
            href="#solutions"
            className="px-8 py-3 mb-4 sm:mb-0 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded hover:bg-blue-500 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default IESGLandingPage;
