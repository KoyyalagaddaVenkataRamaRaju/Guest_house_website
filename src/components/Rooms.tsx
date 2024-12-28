import React from 'react';
import { Users, Wifi, Coffee } from 'lucide-react';

const rooms = [
  {
    title: 'Deluxe Room',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
    capacity: '2 Adults',
    amenities: ['Free WiFi', 'Room Service', 'Mountain View'],
    price: '₹1,500',
  },
  {
    title: 'Super Deluxe Room',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    capacity: '3 Adults',
    amenities: ['Free WiFi', 'Room Service', 'Garden View'],
    price: '₹2,000',
  },
  {
    title: 'Family Suite',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
    capacity: '4 Adults',
    amenities: ['Free WiFi', 'Room Service', 'Balcony'],
    price: '₹2,500',
  },
];

function Rooms() {
  return (
    <section className="py-16 px-4 md:px-8" id="rooms">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-4xl font-semibold tracking-wider text-balck-600 dark:text-[#e82574]">
            OUR ROOMS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Comfortable Stay with Beautiful Views
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {room.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{room.capacity}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      {amenity.includes('WiFi') ? (
                        <Wifi className="w-4 h-4 mr-2" />
                      ) : (
                        <Coffee className="w-4 h-4 mr-2" />
                      )}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#e82574]">
                    {room.price}
                  </span>
                  <a
                    href="https://wa.link/at5ion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e82574] text-white px-6 py-2 rounded-lg font-semibold 
                      hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
