import React, { useState } from 'react';
import GalleryImage from './GalleryImage';
import { galleryImages } from './galleryData';

function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 transition-colors" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">
            GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Explore Our Property
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              image={image}
              isExpanded={expandedIndex === index}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;