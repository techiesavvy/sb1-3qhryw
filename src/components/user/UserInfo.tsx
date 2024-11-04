import React, { useState } from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '../Input';

export function UserInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '(555) 123-4567',
    address: '789 Pine Street, Cityville',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={userInfo.avatar}
          alt={userInfo.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        {isEditing && (
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Change Photo
          </button>
        )}
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <>
            <Input
              label="Full Name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              icon={User}
            />
            <Input
              label="Email"
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              icon={Mail}
            />
            <Input
              label="Phone"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
              icon={Phone}
            />
            <Input
              label="Address"
              value={userInfo.address}
              onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
              icon={MapPin}
            />
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-2" />
              {userInfo.name}
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2" />
              {userInfo.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2" />
              {userInfo.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              {userInfo.address}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}