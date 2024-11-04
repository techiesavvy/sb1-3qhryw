import { Business } from '../types';

export const businesses: Business[] = [
  {
    id: '1',
    name: 'The Rustic Table',
    description: 'Farm-to-table restaurant featuring seasonal ingredients and craft cocktails',
    category: 'Restaurant',
    rating: 4.8,
    reviews: 342,
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    address: '123 Main Street, Downtown',
    phone: '(555) 123-4567',
    hours: 'Mon-Sun: 11:00 AM - 10:00 PM',
    features: [
      'Outdoor Seating',
      'Full Bar',
      'Private Events',
      'Wheelchair Accessible',
      'Vegan Options',
      'Wine List'
    ],
    photos: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Starters',
        items: [
          {
            name: 'Artisanal Bread Basket',
            price: 8,
            description: 'House-made sourdough, butter, sea salt'
          },
          {
            name: 'Roasted Beet Salad',
            price: 14,
            description: 'Goat cheese, walnuts, arugula'
          }
        ]
      },
      {
        category: 'Main Courses',
        items: [
          {
            name: 'Grilled Salmon',
            price: 32,
            description: 'Wild-caught salmon, seasonal vegetables'
          },
          {
            name: 'Grass-fed Ribeye',
            price: 42,
            description: '12oz steak, herb butter, roasted potatoes'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Cafe Noir',
    description: 'Artisanal coffee shop with house-baked pastries',
    category: 'Cafe',
    rating: 4.6,
    reviews: 189,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    address: '456 Oak Avenue',
    phone: '(555) 234-5678',
    hours: 'Mon-Sat: 7:00 AM - 8:00 PM, Sun: 8:00 AM - 6:00 PM',
    features: [
      'Free WiFi',
      'Outdoor Seating',
      'Pet Friendly',
      'Gluten-Free Options'
    ],
    photos: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Drinks',
        items: [
          {
            name: 'House Blend Coffee',
            price: 3.5,
            description: 'Medium roast, smooth finish'
          },
          {
            name: 'Cappuccino',
            price: 4.5,
            description: 'Espresso with steamed milk foam'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Urban Fitness Studio',
    description: 'Modern fitness center offering personalized training and group classes',
    category: 'Entertainment',
    rating: 4.9,
    reviews: 275,
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    address: '789 Fitness Way',
    phone: '(555) 345-6789',
    hours: 'Mon-Fri: 5:00 AM - 10:00 PM, Sat-Sun: 7:00 AM - 8:00 PM',
    features: [
      'Personal Training',
      'Group Classes',
      'Cardio Equipment',
      'Weight Room',
      'Locker Rooms',
      'Towel Service'
    ],
    photos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Memberships',
        items: [
          {
            name: 'Monthly Unlimited',
            price: 89,
            description: 'Full access to gym and classes'
          },
          {
            name: 'Personal Training Package',
            price: 299,
            description: '8 sessions with certified trainer'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Tech Haven',
    description: 'Premium electronics store with expert service and repairs',
    category: 'Shopping',
    rating: 4.7,
    reviews: 423,
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=800&q=80',
    address: '101 Tech Boulevard',
    phone: '(555) 456-7890',
    hours: 'Mon-Sat: 10:00 AM - 9:00 PM, Sun: 11:00 AM - 6:00 PM',
    features: [
      'Expert Tech Support',
      'Repair Services',
      'Trade-In Program',
      'Extended Warranty',
      'Custom Orders',
      'Price Match'
    ],
    photos: [
      'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Services',
        items: [
          {
            name: 'Screen Repair',
            price: 99,
            description: 'Phone or tablet screen replacement'
          },
          {
            name: 'Computer Diagnostic',
            price: 49,
            description: 'Full system check and optimization'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Zen Spa & Wellness',
    description: 'Luxury day spa offering massage, facials, and holistic treatments',
    category: 'Services',
    rating: 4.9,
    reviews: 512,
    priceRange: '$$$$',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    address: '555 Serenity Lane',
    phone: '(555) 567-8901',
    hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
    features: [
      'Couples Massage',
      'Steam Room',
      'Sauna',
      'Meditation Room',
      'Organic Products',
      'Gift Cards'
    ],
    photos: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Massage Therapy',
        items: [
          {
            name: 'Swedish Massage',
            price: 120,
            description: '60-minute relaxation massage'
          },
          {
            name: 'Deep Tissue',
            price: 140,
            description: '60-minute therapeutic massage'
          }
        ]
      },
      {
        category: 'Facials',
        items: [
          {
            name: 'Signature Facial',
            price: 95,
            description: 'Customized facial treatment'
          },
          {
            name: 'Anti-Aging Treatment',
            price: 150,
            description: 'Advanced skincare therapy'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Vintage Vault',
    description: 'Curated vintage clothing and accessories from various eras',
    category: 'Shopping',
    rating: 4.6,
    reviews: 167,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
    address: '202 Retro Road',
    phone: '(555) 678-9012',
    hours: 'Tue-Sat: 11:00 AM - 7:00 PM, Sun: 12:00 PM - 5:00 PM',
    features: [
      'Authenticated Items',
      'Personal Shopping',
      'Consignment',
      'Alterations',
      'Style Consultation',
      'Special Orders'
    ],
    photos: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581344572002-335e2a322435?auto=format&fit=crop&w=800&q=80'
    ],
    menu: [
      {
        category: 'Services',
        items: [
          {
            name: 'Style Consultation',
            price: 75,
            description: '1-hour personalized styling session'
          },
          {
            name: 'Basic Alterations',
            price: 25,
            description: 'Hem, waist adjustment, or simple repairs'
          }
        ]
      }
    ]
  }
];