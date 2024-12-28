import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  return (
    <section className="py-16 px-4 md:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl font-semibold tracking-wider text-black-600 dark:text-[#e82574]">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 dark:text-white" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 dark:text-white">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </p>
                <a
                  href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 mt-1 inline-block dark:text-white"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1 dark:text-white" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Phone
                </h3>
                <a
                  href="tel:+919007062180"
                  className="text-gray-600 hover:text-blue-600 dark:text-white"
                >
                  +91 9007062180
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1 dark:text-white" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:contact@kingsukhguesthouse.com"
                  className="text-gray-600 hover:text-blue-600 dark:text-white"
                >
                  contact@kingsukhguesthouse.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1 dark:text-white" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Hours
                </h3>
                <p className="text-gray-600 dark:text-white">
                  24/7 Check-in Available
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg dark:text-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d86.12345678901234!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzM0LjQiTiA4NsKwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kingsukh Guest House Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
