"use client"

import { useState } from "react"


const sampleReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely love this t-shirt! The quality is exceptional and the fit is perfect. The cotton feels so soft and comfortable.",
    verified: true,
  },
  {
    id: 2,
    author: "Mike R.",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great quality shirt. The color is exactly as shown in the pictures. Only minor issue is it runs slightly small.",
    verified: true,
  },
  {
    id: 3,
    author: "Emma L.",
    rating: 5,
    date: "2024-01-08",
    comment: "Perfect for everyday wear. Washes well and maintains its shape. Highly recommend!",
    verified: false,
  },
]


const ReviewsSection = ({ productId }) => {
  const [reviews, setReviews] = useState(sampleReviews)
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleSubmitReview = () => {
    if (newReview.comment.trim()) {
      const review = {
        id: reviews.length + 1,
        author: "You",
        rating: newReview.rating,
        date: new Date().toISOString().split("T")[0],
        comment: newReview.comment,
        verified: false,
      }
      setReviews([review, ...reviews])
      setNewReview({ rating: 5, comment: "" })
      setShowReviewForm(false)
    }
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="mt-16">
      <div className="bg-white rounded-[5px] border border-gray-200 ">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Write a Review
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">{averageRating.toFixed(1)}</span>
              <span className="text-gray-500">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Review Form */}
          {showReviewForm && (
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setNewReview({ ...newReview, rating: star })} className="p-1">
                        <svg
                          className={`h-5 w-5 ${
                            star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Your Review</label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    placeholder="Share your thoughts about this product..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                    onClick={handleSubmitReview}
                  >
                    Submit Review
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Verified Purchase</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>

                    <p className="text-gray-600 text-pretty">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ReviewsSection