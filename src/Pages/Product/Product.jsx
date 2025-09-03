
import { useState } from "react"



const Product = ({
  product,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountedPrice = product.price
  const savings = product.originalPrice - product.price

  return (
    <div className="space-y-6">
      {/* Brand and Title */}
      <div>
        <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1 text-balance">{product.title}</h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
          <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-transparent bg-red-600 text-white hover:bg-red-700 text-sm">
            {product.discount}% OFF
          </span>
        </div>
        <p className="text-sm text-blue-600 font-medium">You save ${savings.toFixed(2)}</p>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          Color: <span className="font-normal">{selectedColor.name}</span>
        </h3>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorChange(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? "border-blue-600 shadow-md scale-110"
                  : "border-gray-300 hover:border-blue-400"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Size</h3>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`px-4 py-2 border rounded-md transition-all ${
                selectedSize === size
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 hover:border-blue-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Quantity</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Button */}
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-11 rounded-md px-8 w-full ${isWishlisted ? "text-red-500 border-red-500" : ""}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <svg
          className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-current" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>

      {/* Description */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Description</h3>
        <p className="text-gray-600 leading-relaxed text-pretty">{product.description}</p>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Product