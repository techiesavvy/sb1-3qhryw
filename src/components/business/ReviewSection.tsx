import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

interface ReviewSectionProps {
  rating: number;
  reviews: number;
  showReviewForm: boolean;
  onCloseReviewForm: () => void;
}

export function ReviewSection({
  rating,
  reviews,
  showReviewForm,
  onCloseReviewForm,
}: ReviewSectionProps) {
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    text: '',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    console.log('Review submitted:', reviewForm);
    onCloseReviewForm();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
      
      {/* Rating Summary */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Star className="w-8 h-8 text-yellow-400 fill-current" />
          <span className="ml-2 text-3xl font-bold text-gray-900">{rating}</span>
        </div>
        <div className="text-gray-600">
          Based on {reviews} reviews
        </div>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Write a Review</h3>
              <button
                onClick={onCloseReviewForm}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= reviewForm.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={reviewForm.text}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, text: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Sample Reviews */}
      <div className="space-y-6">
        {[
          {
            name: 'Sarah M.',
            rating: 5,
            date: '2 days ago',
            text: 'Amazing experience! The food was exceptional and the service was outstanding. Will definitely be coming back!',
          },
          {
            name: 'Michael R.',
            rating: 4,
            date: '1 week ago',
            text: 'Great atmosphere and delicious food. The wine selection is impressive. Slightly pricey but worth it for special occasions.',
          },
        ].map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-900">{review.name}</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}