
import { useState } from "react"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag, Truck, Shield } from "lucide-react"
import { useNavigate } from "react-router-dom"


const ITEMS_PER_PAGE = 3

const  Cart =() => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: "/wireless-headphones.png",
      category: "Electronics",
      inStock: true,
    },
    {
      id: "2",
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "/cotton-t-shirt.png",
      category: "Clothing",
      inStock: true,
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      price: 299.99,
      originalPrice: 349.99,
      quantity: 1,
      image: "/fitness-watch.png",
      category: "Electronics",
      inStock: false,
    },
    {
      id: "4",
      name: "Eco-Friendly Water Bottle",
      price: 24.99,
      quantity: 1,
      image: "/reusable-water-bottle.png",
      category: "Lifestyle",
      inStock: true,
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 79.99,
      quantity: 1,
      image: "/bluetooth-speaker.png",
      category: "Electronics",
      inStock: true,
    },
    {
      id: "6",
      name: "Yoga Mat Premium",
      price: 49.99,
      quantity: 1,
      image: "/rolled-yoga-mat.png",
      category: "Fitness",
      inStock: true,
    },
      {
      id: "7",
      name: "Yoga Mat Premium",
      price: 49.99,
      quantity: 1,
      image: "/rolled-yoga-mat.png",
      category: "Fitness",
      inStock: true,
    },
      {
      id: "8",
      name: "Yoga Mat Premium",
      price: 49.99,
      quantity: 1,
      image: "/rolled-yoga-mat.png",
      category: "Fitness",
      inStock: true,
    },
      {
      id: "9",
      name: "Yoga Mat Premium",
      price: 49.99,
      quantity: 1,
      image: "/rolled-yoga-mat.png",
      category: "Fitness",
      inStock: true,
    },
  ])

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(cartItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedItems = cartItems.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0)
  const savings = originalTotal - subtotal
  const deliveryCharges = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + deliveryCharges + tax

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4  py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600">{cartItems.length} items in your cart</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {paginatedItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-[6px]  transition-all duration-300 hover:shadow-md animate-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex gap-4">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-medium">Out of Stock</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">${item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-md ${
                      currentPage === page ? "bg-emerald-600 text-white" : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Cart Summary */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-[6px]  sticky top-4">
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Order Summary
                </h2>

                <hr className="border-gray-200" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        You saved
                      </span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      <Truck className="h-4 w-4" />
                      Delivery
                    </span>
                    <span>
                      {deliveryCharges === 0 ? (
                        <span className="text-emerald-600 font-medium">FREE</span>
                      ) : (
                        `$${deliveryCharges.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {deliveryCharges > 0 && (
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <Shield className="h-4 w-4 inline mr-1" />
                    Add ${(100 - subtotal).toFixed(2)} more for FREE delivery
                  </div>
                )}

                <button className="w-full h-12 text-lg font-semibold bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all duration-200 hover:scale-[1.02]">
                  Proceed to Checkout
                </button>

                <button className="w-full py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart