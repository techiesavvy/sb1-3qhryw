import React from 'react';
import { Bell } from 'lucide-react';
import { useDropdown } from '../../hooks/useDropdown';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export function NotificationDropdown() {
  const { isOpen, ref, toggleOpen } = useDropdown();
  
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'New Order',
      message: 'You have received a new order for Grilled Salmon',
      time: '5 minutes ago',
      isRead: false
    },
    {
      id: '2',
      title: 'Review Posted',
      message: 'A customer left a 5-star review',
      time: '1 hour ago',
      isRead: false
    },
    {
      id: '3',
      title: 'Daily Summary',
      message: 'View your business performance for today',
      time: '3 hours ago',
      isRead: true
    }
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggleOpen}
        className="relative p-2 text-gray-400 hover:text-gray-500"
      >
        <Bell className="w-6 h-6" />
        {notifications.some(n => !n.isRead) && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
            <div className="mt-2 divide-y divide-gray-100">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`py-3 ${notification.isRead ? 'opacity-75' : ''}`}
                  >
                    <div className="flex items-start">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-500">{notification.message}</p>
                        <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                      </div>
                      {!notification.isRead && (
                        <div className="ml-3 flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="py-4 text-sm text-gray-500 text-center">
                  No new notifications
                </p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-100">
            <a
              href="#"
              className="block px-4 py-3 text-sm text-center text-gray-500 hover:text-gray-700"
            >
              View all notifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
}