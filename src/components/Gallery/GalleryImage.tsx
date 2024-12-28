import React from 'react';
import { cn } from '../../utils/cn';

interface GalleryImageProps {
  image: {
    url: string;
    caption: string;
  };
  isExpanded: boolean;
  onClick: () => void;
}

function GalleryImage({ image, isExpanded, onClick }: GalleryImageProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 ease-in-out",
        isExpanded ? "md:col-span-2 md:row-span-2" : ""
      )}
      onClick={onClick}
    >
      <div className="group aspect-w-16 aspect-h-9 h-64">
        <img
          src={image.url}
          alt={image.caption}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-in-out",
            isExpanded ? "scale-100" : "group-hover:scale-110"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-black transition-opacity duration-500",
          isExpanded ? "bg-opacity-60" : "bg-opacity-40 opacity-0 group-hover:opacity-100"
        )}>
          <div className="h-full flex items-center justify-center p-4">
            <p className="text-white text-lg font-semibold text-center transform transition-transform duration-500">
              {image.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryImage;