import React, { useState } from 'react';
import  Header  from '../../Components/Products/Header';
import  FilterSidebar  from '../../Components/Products/FilterSidebar';
import ProductGrid  from '../../Components/Products/ProductGrid';
import Pagination  from '../../Components/Products/Pagination';
import { useProducts } from '../../hooks/useProduct';

const  Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { 
    products, 
    totalProducts, 
    filters, 
    sortBy, 
    pagination, 
    setFilters, 
    setSortBy, 
    updatePagination 
  } = useProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header
        productsCount={products.length}
        totalProducts={totalProducts}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onFilterToggle={() => setIsFilterOpen(true)}
      />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* Product Grid */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <ProductGrid products={products} />
          
          {/* Pagination */}
          <div className="mt-8">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              totalItems={pagination.totalItems}
              itemsPerPage={pagination.itemsPerPage}
              onPageChange={(page) => updatePagination({ currentPage: page })}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;