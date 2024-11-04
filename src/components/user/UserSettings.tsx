import React, { useState } from 'react';
import { Settings, Bell, CreditCard, Shield } from 'lucide-react';

export function UserSettings() {
  const [settings, setSettings] = useState({
    notifications: {
      orders: true,
      promotions: true,
      reviews: false
    },
    privacy: {
      profileVisibility: 'public',
      shareHistory: false
    },
    payment: {
      defaultMethod: 'visa-1234'
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Settings className="w-5 h-5 text-gray-400 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Notification Settings */}
        <div>
          <div className="flex items-center mb-3">
            <Bell className="w-4 h-4 text-gray-400 mr-2" />
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
          </div>
          <div className="space-y-2">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        [key]: e.target.checked
                      }
                    })
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <div className="flex items-center mb-3">
            <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
            <h3 className="text-sm font-medium text-gray-900">Payment Methods</h3>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Manage Payment Methods
          </button>
        </div>

        {/* Privacy Settings */}
        <div>
          <div className="flex items-center mb-3">
            <Shield className="w-4 h-4 text-gray-400 mr-2" />
            <h3 className="text-sm font-medium text-gray-900">Privacy</h3>
          </div>
          <div className="space-y-2">
            <select
              value={settings.privacy.profileVisibility}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  privacy: {
                    ...settings.privacy,
                    profileVisibility: e.target.value
                  }
                })
              }
              className="block w-full text-sm border-gray-300 rounded-md"
            >
              <option value="public">Public Profile</option>
              <option value="private">Private Profile</option>
            </select>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.shareHistory}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      shareHistory: e.target.checked
                    }
                  })
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                Share order history with businesses
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}