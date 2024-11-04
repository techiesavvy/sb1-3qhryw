import React from 'react';
import { Layout } from '../components/Layout';
import { UserOrders } from '../components/user/UserOrders';
import { UserInfo } from '../components/user/UserInfo';
import { UserNotifications } from '../components/user/UserNotifications';
import { UserSettings } from '../components/user/UserSettings';

export function UserProfile() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:flex-grow space-y-8">
            <UserInfo />
            <UserOrders />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            <UserNotifications />
            <UserSettings />
          </div>
        </div>
      </div>
    </Layout>
  );
}