import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { categories } from '../../Data/products';

export const FilterSidebar = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    discount: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    onFilterChange({ ...filters, categories: updatedCategories });
  };

  const handlePriceChange = (range) => {
    // Toggle if same price clicked
    onFilterChange({
      ...filters,
      priceRange: filters.priceRange === range ? '' : range,
    });
  };

  const handleDiscountChange = (discount) => {
    const updatedDiscounts = filters.discounts.includes(discount)
      ? filters.discounts.filter((d) => d !== discount)
      : [...filters.discounts, discount];

    onFilterChange({ ...filters, discounts: updatedDiscounts });
  };

  const clearFilters = () => {
    onFilterChange({ categories: [], priceRange: '', discounts: [] });
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-10 w-80 bg-white lg:bg-transparent
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-300 ease-in-out lg:w-64 xl:w-72
          border-r border-gray-200 lg:border-none
        `}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear All
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Category</span>
              {expandedSections.category ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {expandedSections.category && (
              <div className="space-y-2 animate-fade-in">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Price Range</span>
              {expandedSections.price ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {expandedSections.price && (
              <div className="space-y-2 animate-fade-in">
                {[
                  { label: 'Under $50', value: '0-50' },
                  { label: '$50 - $100', value: '50-100' },
                  { label: '$100 - $200', value: '100-200' },
                  { label: 'Over $200', value: '200+' },
                ].map((price) => (
                  <label
                    key={price.value}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="price"
                      value={price.value}
                      checked={filters.priceRange === price.value}
                      onChange={() => handlePriceChange(price.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      {price.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Discount Filter */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('discount')}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
            >
              <span>Discount</span>
              {expandedSections.discount ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {expandedSections.discount && (
              <div className="space-y-2 animate-fade-in">
                {[
                  { label: '10% or more', value: '10+' },
                  { label: '20% or more', value: '20+' },
                  { label: '30% or more', value: '30+' },
                  { label: '50% or more', value: '50+' },
                ].map((discount) => (
                  <label
                    key={discount.value}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.discounts.includes(discount.value)}
                      onChange={() => handleDiscountChange(discount.value)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      {discount.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Clear filters button for mobile */}
          <button
            onClick={clearFilters}
            className="w-full lg:hidden py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};
export default FilterSidebar;