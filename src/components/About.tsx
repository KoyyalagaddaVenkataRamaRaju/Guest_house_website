import React from 'react';
import { MapPin, Phone } from 'lucide-react';

function About() {
  return (
    <section
      className="py-16 px-4 md:px-8 bg-gray-50  dark:bg-gray-900 "
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            alt="Scenic view of guest house"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <span className="text-4xl font-semibold tracking-wider text-black-600 dark:text-[#e82574]">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            The Best Holidays Start Here!
          </h2>
          <p className="text-gray-600 leading-relaxed dark:text-white">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis.
          </p>

          <div className="space-y-4 dark:text-white">
            <a
              href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 hover:text-[#e82574] transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2 dark:text-white" />
              <span className="font-semibold dark:text-white">
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </span>
            </a>

            <a
              href="tel:+919007062180"
              className="flex items-center text-gray-800 hover:text-[#e82574] transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 dark:text-white" />
              <span className="font-semibold dark:text-white">
                +91 9007062180
              </span>
            </a>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.link/at5ion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e82574] text-white px-8 py-3 rounded-lg font-semibold 
                hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
