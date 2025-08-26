import React from 'react';
import { Filter, SortAsc, SortDesc, Clock, TrendingUp } from 'lucide-react';

 const Header = ({
  productsCount,
  totalProducts,
  sortBy,
  onSortChange,
  onFilterToggle,
}) => {
  const sortOptions = [
    { value: 'new-arrivals', label: 'New Arrivals', icon: Clock },
    { value: 'price-low', label: 'Price: Low to High', icon: SortAsc },
    { value: 'price-high', label: 'Price: High to Low', icon: SortDesc },
    { value: 'rating', label: 'Top Rated', icon: TrendingUp },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left side - Title and count */}
          <div className="flex items-center gap-4">
            <button
              onClick={onFilterToggle}
              className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              {totalProducts !== productsCount ? (
                <p className="text-sm text-gray-600 mt-1">
                  Showing {productsCount} of {totalProducts}{' '}
                  {totalProducts === 1 ? 'product' : 'products'}
                </p>
              ) : (
                <p className="text-sm text-gray-600 mt-1">
                  {productsCount} {productsCount === 1 ? 'product' : 'products'} found
                </p>
              )}
            </div>
          </div>

          {/* Right side - Sort options */}
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((option) => {
              const Icon = option.icon;
              const isActive = sortBy === option.value;
              
              return (
                <button
                  key={option.value}
                  onClick={() => onSortChange(option.value)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{option.label}</span>
                  <span className="sm:hidden">
                    {option.value === 'new-arrivals' && 'New'}
                    {option.value === 'price-low' && 'Price ↑'}
                    {option.value === 'price-high' && 'Price ↓'}
                    {option.value === 'rating' && 'Rating'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;