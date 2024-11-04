import React, { useState } from 'react';
import { Input } from '../Input';

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    businessName: 'The Rustic Table',
    category: 'Restaurants',
    description: 'Farm-to-table restaurant featuring seasonal ingredients and craft cocktails',
    address: '123 Main St, Downtown',
    phone: '(555) 123-4567',
    email: 'contact@rustictable.com',
    website: 'www.rustictable.com',
    hours: '11:00 AM - 10:00 PM'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
    console.log('Saving profile:', profile);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Business Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Save Changes
          </button>
        )}
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <>
            <Input
              label="Business Name"
              value={profile.businessName}
              onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <Input
              label="Phone"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <Input
              label="Website"
              value={profile.website}
              onChange={(e) => setProfile({ ...profile, website: e.target.value })}
            />
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Input
              label="Business Hours"
              value={profile.hours}
              onChange={(e) => setProfile({ ...profile, hours: e.target.value })}
            />
          </>
        ) : (
          <div className="space-y-4">
            {Object.entries(profile).map(([key, value]) => (
              <div key={key}>
                <dt className="text-sm font-medium text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{value}</dd>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}