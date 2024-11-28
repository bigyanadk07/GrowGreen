import { Leaf, TreePine, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Categories() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/shop" className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <Leaf className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Indoor Plants</h3>
            <p className="text-gray-600">Perfect for adding life to any room</p>
          </Link>
          <Link to="/shop" className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <TreePine className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Outdoor Plants</h3>
            <p className="text-gray-600">Beautify your garden and patio</p>
          </Link>
          <Link to="/shop" className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <Sprout className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Succulents</h3>
            <p className="text-gray-600">Low maintenance, high style</p>
          </Link>
        </div>
      </div>
    </div>
  );
}