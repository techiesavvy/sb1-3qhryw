import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Grilled Salmon',
      price: 24.99,
      description: 'Fresh Atlantic salmon with seasonal vegetables',
      category: 'Main Course'
    },
    {
      id: '2',
      name: 'Truffle Pasta',
      price: 19.99,
      description: 'Handmade pasta with black truffle sauce',
      category: 'Pasta'
    }
  ]);

  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editForm, setEditForm] = useState<Product>({
    id: '',
    name: '',
    price: 0,
    description: '',
    category: ''
  });

  const handleAdd = () => {
    if (showAddForm) {
      setProducts([...products, { ...editForm, id: Date.now().toString() }]);
      setShowAddForm(false);
      setEditForm({ id: '', name: '', price: 0, description: '', category: '' });
    } else {
      setShowAddForm(true);
    }
  };

  const handleEdit = (product: Product) => {
    if (isEditing === product.id) {
      setProducts(products.map(p => p.id === product.id ? editForm : p));
      setIsEditing(null);
    } else {
      setIsEditing(product.id);
      setEditForm(product);
    }
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Products & Services</h2>
        <button
          onClick={handleAdd}
          className="flex items-center text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </button>
      </div>

      {showAddForm && (
        <div className="mb-6 p-4 border rounded-lg">
          <h3 className="text-md font-medium mb-4">Add New Product</h3>
          <div className="space-y-4">
            <input
              placeholder="Product Name"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Price"
              value={editForm.price}
              onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              placeholder="Category"
              value={editForm.category}
              onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />
            <textarea
              placeholder="Description"
              value={editForm.description}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            {isEditing === product.id ? (
              <div className="space-y-4">
                <input
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsEditing(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}