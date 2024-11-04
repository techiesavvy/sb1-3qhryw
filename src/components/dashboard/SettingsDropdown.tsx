import React from 'react';
import { Settings, User, Store, Bell, LogOut } from 'lucide-react';
import { useDropdown } from '../../hooks/useDropdown';

export function SettingsDropdown() {
  const { isOpen, ref, toggleOpen } = useDropdown();

  const menuItems = [
    { icon: User, label: 'Account Settings', href: '#' },
    { icon: Store, label: 'Business Settings', href: '#' },
    { icon: Bell, label: 'Notification Settings', href: '#' }
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggleOpen}
        className="p-2 text-gray-400 hover:text-gray-500"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400" />
                {item.label}
              </a>
            ))}
            <div className="border-t border-gray-100">
              <button
                className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={() => console.log('Logout')}
              >
                <LogOut className="mr-3 h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}