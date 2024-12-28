import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    caption: 'Guest House Exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    caption: 'Deluxe Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
    caption: 'Family Suite',
  },
  {
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    caption: 'Deluxe Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&q=80',
    caption: 'Mountain view',
  },
  {
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80',
    caption: 'Dinning area',
  },
];

function Gallery() {
  return (
    <section
      className="py-16 px-4 md:px-8 bg-gray-50  dark:bg-gray-900 "
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl font-semibold tracking-wider text-black-800 dark:text-[#e82574]">
            GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 dark:text-white">
            Explore Our Property
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
