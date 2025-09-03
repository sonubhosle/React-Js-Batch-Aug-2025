

import { useRef } from "react"

const relatedProducts = [
  {
    id: 1,
    title: "Premium Polo Shirt",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.3,
    image: "/premium-polo-shirt.png",
  },
  {
    id: 2,
    title: "Casual Hoodie",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    image: "/casual-hoodie.png",
  },
  {
    id: 3,
    title: "Denim Jacket",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.5,
    image: "/classic-denim-jacket.png",
  },
  {
    id: 4,
    title: "Cotton Shorts",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.2,
    image: "/cotton-shorts.png",
  },
  {
    id: 5,
    title: "Knit Sweater",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    image: "/knit-sweater.png",
  },
]

const RelatedProducts = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };


  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
        <div className="flex gap-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-9 w-9"
            onClick={() => scroll("left")}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-9 w-9"
            onClick={() => scroll("right")}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-[5px] border border-gray-200  hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative aspect-square   overflow-hidden bg-gray-100">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="object-cover h-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-2">
              <h3 className="font-semibold text-gray-900 mb-2 text-balance">{product.title}</h3>

              <div className="flex items-center gap-1 mb-2">
                <svg className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-xs text-gray-500">{product.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts