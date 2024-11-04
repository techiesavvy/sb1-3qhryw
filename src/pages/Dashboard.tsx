import React from 'react';
import { Layout } from '../components/Layout';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { ProfileSection } from '../components/dashboard/ProfileSection';
import { ProductsSection } from '../components/dashboard/ProductsSection';
import { NotificationDropdown } from '../components/dashboard/NotificationDropdown';
import { SettingsDropdown } from '../components/dashboard/SettingsDropdown';

export function Dashboard() {
  const stats = [
    { label: 'Total Orders', value: '156', icon: Package, trend: '+12.5%' },
    { label: 'Total Revenue', value: '$12,426', icon: DollarSign, trend: '+8.2%' },
    { label: 'Total Views', value: '2,315', icon: TrendingUp, trend: '+23.1%' },
    { label: 'Total Reviews', value: '48', icon: Users, trend: '+15.3%' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Business Dashboard</h1>
          <div className="flex items-center space-x-2">
            <NotificationDropdown />
            <SettingsDropdown />
          </div>
        </div>

        <DashboardStats stats={stats} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductsSection />
          </div>
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
        </div>
      </div>
    </Layout>
  );
}