import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

 const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[4px]  transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden border border-gray-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <img src={product.image}
          alt={product.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.discount && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{product.discount}%
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              New
            </span>
          )}
        </div>

      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;