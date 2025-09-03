
import { useState } from "react"

const  OffersSection = () => {
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const offers = [
    { text: "Free shipping on orders over $75", color: "bg-green-100 text-green-800" },
    { text: "Extra 10% off on first order", color: "bg-blue-100 text-blue-800" },
    { text: "Buy 2 Get 1 Free on selected items", color: "bg-purple-100 text-purple-800" },
  ]

  const coupons = ["SAVE10", "FIRST15", "WELCOME20"]

  const applyCoupon = () => {
    if (coupons.includes(couponCode.toUpperCase())) {
      setAppliedCoupon(couponCode.toUpperCase())
      setCouponCode("")
    }
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-600 text-white hover:bg-emerald-700 h-11 rounded-md px-8 flex-1">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
          Add to Cart
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-600 text-white hover:bg-gray-700 h-11 rounded-md px-8 flex-1">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          Checkout
        </button>
      </div>

      {/* Cool Offers */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
          Special Offers
        </h3>
        <div className="space-y-2">
          {offers.map((offer, index) => (
            <div key={index} className={`p-3 rounded-lg ${offer.color} flex items-center gap-2`}>
              {index === 0 && (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              )}
              {index === 1 && (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
              )}
              {index === 2 && (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              )}
              <span className="text-sm font-medium">{offer.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Coupon Section */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          Apply Coupon
        </h3>
        <div className="flex gap-2">
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2"
            onClick={applyCoupon}
          >
            Apply
          </button>
        </div>

        {appliedCoupon && (
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 text-green-600">
              {appliedCoupon} Applied
            </span>
            <button onClick={() => setAppliedCoupon(null)} className="text-sm text-gray-500 hover:text-gray-900">
              Remove
            </button>
          </div>
        )}

        {/* Available Coupons */}
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Available coupons:</p>
          <div className="flex gap-2 flex-wrap">
            {coupons.map((coupon) => (
              <button
                key={coupon}
                onClick={() => setCouponCode(coupon)}
                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded border border-dashed border-blue-300 text-blue-600"
              >
                {coupon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersSection