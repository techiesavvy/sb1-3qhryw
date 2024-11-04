import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Star, MapPin, Clock, Phone, Heart, Share2, MessageCircle } from 'lucide-react';
import { Business } from '../types';
import { ReviewSection } from '../components/business/ReviewSection';
import { PhotoGallery } from '../components/business/PhotoGallery';
import { MenuSection } from '../components/business/MenuSection';
import { businesses } from '../data/businesses';

export function BusinessPage() {
  const business = businesses[0];
  const [isLiked, setIsLiked] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">{business.rating}</span>
                <span className="ml-1">({business.reviews} reviews)</span>
              </div>
              <span>•</span>
              <span>{business.category}</span>
              <span>•</span>
              <span>{business.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center px-4 py-2 rounded-md ${
              isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600'
            }`}
          >
            <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
            {isLiked ? 'Saved' : 'Save'}
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-50 text-gray-600 rounded-md">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </button>
          <button
            onClick={() => setShowReviewForm(true)}
            className="flex items-center px-4 py-2 bg-gray-50 text-gray-600 rounded-md"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Write Review
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <PhotoGallery photos={business.photos} />

            {/* Menu Section */}
            <MenuSection menu={business.menu} />

            {/* Reviews Section */}
            <ReviewSection
              rating={business.rating}
              reviews={business.reviews}
              showReviewForm={showReviewForm}
              onCloseReviewForm={() => setShowReviewForm(false)}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Info Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{business.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{business.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{business.hours}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Order Online
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">
                  Make Reservation
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
              <div className="space-y-2">
                {business.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}