import React from 'react';
import { Layout } from './components/Layout';
import { BusinessCard } from './components/BusinessCard';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { SignIn } from './pages/SignIn';
import { RegisterBusiness } from './pages/RegisterBusiness';
import { Dashboard } from './pages/Dashboard';
import { BusinessPage } from './pages/BusinessPage';
import { UserProfile } from './pages/UserProfile';
import { businesses } from './data/businesses';
import type { Category } from './types';

function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('All');

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No businesses found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

function App() {
  const path = window.location.pathname;

  switch (path) {
    case '/signin':
      return <SignIn />;
    case '/register-business':
      return <RegisterBusiness />;
    case '/dashboard':
      return <Dashboard />;
    case '/business/1':
      return <BusinessPage />;
    case '/profile':
      return <UserProfile />;
    default:
      return <HomePage />;
  }
}

export default App;