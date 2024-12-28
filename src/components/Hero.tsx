import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <ImageCarousel />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="z-10 flex flex-col justify-center items-center text-center bg-opacity-5 bg-white w-full h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
            <h1 className=" text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to{' '}
              <span className="text-[#e82574]">Kingsukh Guest House</span>
            </h1>
            <h2 className="text-xl md:text-6xl mb-8 max-w-2xl text-white">
              Make Yourself At Home In Our{' '}
              <span className="text-[#e82574]"> Guest House</span>.
            </h2>
            <a
              href="https://wa.link/at5ion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#e82574] text-white px-8 py-3 rounded-lg font-semibold 
             hover:bg-[#bc1c5c] transition-colors duration-300 shadow-lg"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
