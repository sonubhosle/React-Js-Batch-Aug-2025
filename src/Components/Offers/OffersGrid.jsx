import React from 'react';
import { ArrowRight, Star, Tag, Gift, Zap } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Flash Sale',
    description: 'Up to 70% off on electronics',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=500',
    discount: '70% OFF',
    endTime: '2024-01-30',
    icon: Zap,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 2,
    title: 'Member Exclusive',
    description: 'Special deals for premium members',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500',
    discount: 'EXCLUSIVE',
    endTime: '2024-02-15',
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Clearance Sale',
    description: 'Last chance to grab these deals',
    image: 'https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=500',
    discount: '50% OFF',
    endTime: '2024-01-28',
    icon: Tag,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Bundle Deals',
    description: 'Buy 2 get 1 free on selected items',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
    discount: 'BUY 2 GET 1',
    endTime: '2024-02-05',
    icon: Gift,
    color: 'from-blue-500 to-indigo-500'
  }
];

const OffersGrid  = () => {
  return (
    <div className="mb-12 mt-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => {
          const IconComponent = offer.icon;
          
          return (
            <div 
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-80`}></div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white text-gray-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                    {offer.discount}
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white bg-opacity-90 p-2 rounded-full">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{offer.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Ends {new Date(offer.endTime).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OffersGrid;