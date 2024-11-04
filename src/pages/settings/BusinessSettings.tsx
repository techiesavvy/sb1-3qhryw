import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/Input';
import { Building2, Clock, CreditCard, MapPin } from 'lucide-react';

export function BusinessSettings() {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'The Rustic Table',
    description: 'Farm-to-table restaurant featuring seasonal ingredients',
    category: 'Restaurants',
    website: 'www.rustictable.com'
  });

  const [location, setLocation] = useState({
    address: '123 Main St',
    city: 'Downtown',
    state: 'CA',
    zip: '90210'
  });

  const [hours, setHours] = useState({
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: '10:00 AM - 3:00 PM',
    sunday: 'Closed'
  });

  const [payment, setPayment] = useState({
    accountName: 'John Doe',
    accountNumber: '****4567',
    routingNumber: '****8901',
    taxId: '**-***4321'
  });

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Business Settings</h1>
        
        <div className="space-y-6">
          {/* Business Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Building2 className="w-5 h-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Business Information</h2>
            </div>
            <div className="space-y-4">
              <Input
                label="Business Name"
                value={businessInfo.name}
                onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
              />
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={businessInfo.description}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <Input
                label="Category"
                value={businessInfo.category}
                onChange={(e) => setBusinessInfo({ ...businessInfo, category: e.target.value })}
              />
              <Input
                label="Website"
                value={businessInfo.website}
                onChange={(e) => setBusinessInfo({ ...businessInfo, website: e.target.value })}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Location</h2>
            </div>
            <div className="space-y-4">
              <Input
                label="Street Address"
                value={location.address}
                onChange={(e) => setLocation({ ...location, address: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={location.city}
                  onChange={(e) => setLocation({ ...location, city: e.target.value })}
                />
                <Input
                  label="State"
                  value={location.state}
                  onChange={(e) => setLocation({ ...location, state: e.target.value })}
                />
              </div>
              <Input
                label="ZIP Code"
                value={location.zip}
                onChange={(e) => setLocation({ ...location, zip: e.target.value })}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Update Location
              </button>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Business Hours</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(hours).map(([day, time]) => (
                <Input
                  key={day}
                  label={day.charAt(0).toUpperCase() + day.slice(1)}
                  value={time}
                  onChange={(e) => setHours({ ...hours, [day]: e.target.value })}
                />
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Hours
              </button>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Payment Information</h2>
            </div>
            <div className="space-y-4">
              <Input
                label="Account Name"
                value={payment.accountName}
                onChange={(e) => setPayment({ ...payment, accountName: e.target.value })}
              />
              <Input
                label="Account Number"
                type="password"
                value={payment.accountNumber}
                onChange={(e) => setPayment({ ...payment, accountNumber: e.target.value })}
              />
              <Input
                label="Routing Number"
                type="password"
                value={payment.routingNumber}
                onChange={(e) => setPayment({ ...payment, routingNumber: e.target.value })}
              />
              <Input
                label="Tax ID"
                type="password"
                value={payment.taxId}
                onChange={(e) => setPayment({ ...payment, taxId: e.target.value })}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Update Payment Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}