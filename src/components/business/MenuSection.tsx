import React from 'react';

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface MenuSectionProps {
  menu: MenuCategory[];
}

export function MenuSection({ menu }: MenuSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
      <div className="space-y-8">
        {menu.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start pb-4 border-b border-gray-100"
                >
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-lg font-medium text-gray-900">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}