import React from 'react';
import { Package, Clock, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  business: string;
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: { name: string; quantity: number; price: number }[];
}

export function UserOrders() {
  const orders: Order[] = [
    {
      id: 'ORD-001',
      business: 'The Rustic Table',
      date: '2024-03-15',
      status: 'completed',
      total: 86.50,
      items: [
        { name: 'Grilled Salmon', quantity: 2, price: 32 },
        { name: 'Artisanal Bread Basket', quantity: 1, price: 8 }
      ]
    },
    {
      id: 'ORD-002',
      business: 'Cafe Noir',
      date: '2024-03-14',
      status: 'processing',
      total: 24.50,
      items: [
        { name: 'House Blend Coffee', quantity: 2, price: 3.5 },
        { name: 'Cappuccino', quantity: 2, price: 4.5 }
      ]
    }
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{order.business}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Package className="w-4 h-4 mr-1" />
                  {order.id}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(order.date).toLocaleDateString()}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-gray-900">${(item.quantity * item.price).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div className="text-gray-900">
                <span className="text-sm text-gray-500">Total</span>
                <span className="ml-2 font-medium">${order.total.toFixed(2)}</span>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}