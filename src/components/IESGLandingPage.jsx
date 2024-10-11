import React from 'react';
import logo from '../images/IESG LOGO HQ no background.png'; // Path to your logo
import natureVideo from '../videos/nature-background.mp4';   // Path to your video

const IESGLandingPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src={natureVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo */}
        <img src={logo} alt="IESG Logo" className="w-40 h-auto mb-8" />

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400">
          Revolutionizing ESG Tracking
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Leveraging blockchain technology for transparent and efficient Environmental, Social, and Governance solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
          <a
            href="#solutions"
            className="px-8 py-3 mb-4 sm:mb-0 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-green-500 text-green-500 font-bold rounded hover:bg-green-500 hover:text-white transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-extrabold text-green-400">Our Solutions</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Empowering sustainable practices with comprehensive ESG management tools.
        </p>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {/* Solution 1 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <i className="fas fa-leaf text-green-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-2">Carbon Credit Management</h3>
            <p className="text-gray-300">
              Efficiently track and trade carbon credits using our blockchain-based platform.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <i className="fas fa-chart-line text-green-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-2">ESG Reporting</h3>
            <p className="text-gray-300">
              Generate comprehensive and transparent ESG reports with ease.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <i className="fas fa-analytics text-green-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-2">Data Analytics</h3>
            <p className="text-gray-300">
              Gain valuable insights from your ESG data with our advanced analytics tools.
            </p>
          </div>

          {/* Solution 4 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <i className="fas fa-shield-alt text-green-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-2">Compliance Monitoring</h3>
            <p className="text-gray-300">
              Stay on top of regulatory requirements with our compliance tracking features.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-4xl font-extrabold text-green-400">
          Ready to Shape a Sustainable Future?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Join us in revolutionizing ESG practices with cutting-edge technology.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded hover:bg-green-600 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-transparent border border-green-500 text-green-500 text-xl font-bold rounded hover:bg-green-500 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-extrabold text-green-400">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Have questions or want to get started with IESG? Drop us a message and let's build a sustainable future together.
        </p>
        <form className="mt-8 max-w-xl mx-auto">
          <input
            className="w-full mb-4 p-4 bg-gray-800 text-white rounded"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full mb-4 p-4 bg-gray-800 text-white rounded"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-full mb-4 p-4 bg-gray-800 text-white rounded"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-8">
        <p className="text-gray-500">&copy; 2024 IESG. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IESGLandingPage;
