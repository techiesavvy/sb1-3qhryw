import React from 'react';
import { Bell, Package, Star, Tag } from 'lucide-react';

interface Notification {
  id: string;
  type: 'order' | 'review' | 'promotion';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export function UserNotifications() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'order',
      title: 'Order Confirmed',
      message: 'Your order from The Rustic Table has been confirmed',
      time: '5 minutes ago',
      isRead: false
    },
    {
      id: '2',
      type: 'promotion',
      title: 'Special Offer',
      message: '20% off your next order at Cafe Noir',
      time: '2 hours ago',
      isRead: false
    },
    {
      id: '3',
      type: 'review',
      title: 'Review Reminder',
      message: 'Share your experience at The Rustic Table',
      time: '1 day ago',
      isRead: true
    }
  ];

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return Package;
      case 'review':
        return Star;
      case 'promotion':
        return Tag;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Bell className="w-5 h-5 text-gray-400 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = getIcon(notification.type);
          return (
            <div
              key={notification.id}
              className={`flex items-start p-3 rounded-lg ${
                notification.isRead ? 'bg-white' : 'bg-blue-50'
              }`}
            >
              <div className="flex-shrink-0">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}