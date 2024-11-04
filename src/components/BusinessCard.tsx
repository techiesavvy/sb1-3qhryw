import React from 'react';
import { Star, MapPin, Clock, Phone, DollarSign } from 'lucide-react';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={business.image} 
        alt={business.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
          <span className="px-2 py-1 bg-gray-100 text-sm rounded-full">
            {business.priceRange}
          </span>
        </div>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700">{business.rating}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-500">{business.reviews} reviews</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{business.description}</p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {business.address}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {business.hours}
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            {business.phone}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {business.features.map((feature) => (
            <span 
              key={feature}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Order Online
        </button>
      </div>
    </div>
  );
}