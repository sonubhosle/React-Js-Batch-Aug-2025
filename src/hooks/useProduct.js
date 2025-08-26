import { useState, useMemo } from 'react';
import { products } from '../data/products';

export const useProducts = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: '',
    discounts: [],
  });
  const [sortBy, setSortBy] = useState('new-arrivals');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 8,
    totalItems: 0,
    totalPages: 0,
  });

  const { filteredProducts, paginatedProducts } = useMemo(() => {
    let filtered = products.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        if (max === undefined) {
          if (product.price < min) return false;
        } else {
          if (product.price < min || product.price > max) return false;
        }
      }

      // Discount filter
      if (filters.discounts.length > 0) {
        const hasMatchingDiscount = filters.discounts.some(discountFilter => {
          const minDiscount = parseInt(discountFilter.replace('+', ''));
          return product.discount && product.discount >= minDiscount;
        });
        if (!hasMatchingDiscount) return false;
      }

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'new-arrivals':
          if (a.isNewArrival && !b.isNewArrival) return -1;
          if (!a.isNewArrival && b.isNewArrival) return 1;
          return b.id - a.id; // fallback to ID for consistent sorting
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    // Calculate pagination
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / pagination.itemsPerPage);
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    return {
      filteredProducts: filtered,
      paginatedProducts,
      totalItems,
      totalPages,
    };
  }, [filters, sortBy, pagination.currentPage, pagination.itemsPerPage]);

  // Update pagination state
  const updatePagination = (updates) => {
    setPagination(prev => ({
      ...prev,
      ...updates,
    }));
  };

  // Reset to first page when filters change
  const setFiltersWithReset = (newFilters) => {
    setFilters(newFilters);
    updatePagination({ currentPage: 1 });
  };

  const setSortByWithReset = (newSort) => {
    setSortBy(newSort);
    updatePagination({ currentPage: 1 });
  };

  return {
    products: paginatedProducts,
    totalProducts: filteredProducts.length,
    filters,
    sortBy,
    pagination: {
      ...pagination,
      totalItems: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / pagination.itemsPerPage),
    },
    setFilters: setFiltersWithReset,
    setSortBy: setSortByWithReset,
    updatePagination,
  };
};
