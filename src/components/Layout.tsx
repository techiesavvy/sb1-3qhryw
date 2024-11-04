import React from 'react';
import { Rocket } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Rocket className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">GET ME.</h1>
            </a>
            <nav className="flex items-center space-x-4">
              <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="/register-business" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                List Your Business
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white border-t">
        {/* Footer content remains the same */}
      </footer>
    </div>
  );
}