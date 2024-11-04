import { Business } from './types';

export const businesses: Business[] = [
  {
    id: '1',
    name: 'The Rustic Table',
    category: 'Restaurants',
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Farm-to-table restaurant featuring seasonal ingredients and craft cocktails',
    address: '123 Main St, Downtown',
    hours: '11:00 AM - 10:00 PM',
    phone: '(555) 123-4567',
    priceRange: '$$$',
    features: ['Outdoor Seating', 'Takeout', 'Delivery', 'Reservations']
  },
  {
    id: '2',
    name: 'Urban Threads',
    category: 'Retail',
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'Contemporary fashion boutique offering curated collections',
    address: '456 Fashion Ave',
    hours: '10:00 AM - 9:00 PM',
    phone: '(555) 234-5678',
    priceRange: '$$',
    features: ['Personal Styling', 'Alterations', 'Gift Cards']
  },
  {
    id: '3',
    name: 'Zen Wellness Spa',
    category: 'Services',
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury spa offering massage, facials, and wellness treatments',
    address: '789 Serenity Rd',
    hours: '9:00 AM - 8:00 PM',
    phone: '(555) 345-6789',
    priceRange: '$$$$',
    features: ['Online Booking', 'Gift Certificates', 'Couples Treatments']
  }
];