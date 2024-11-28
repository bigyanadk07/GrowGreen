import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold">Grow Green</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Bringing nature into your home, one plant at a time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/shop" className="hover:text-green-600">Shop</Link></li>
              <li><Link to="/about" className="hover:text-green-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
              <li><Link to="/shop" className="hover:text-green-600">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/shop" className="hover:text-green-600">Indoor Plants</Link></li>
              <li><Link to="/shop" className="hover:text-green-600">Outdoor Plants</Link></li>
              <li><Link to="/shop" className="hover:text-green-600">Succulents</Link></li>
              <li><Link to="/shop" className="hover:text-green-600">Plant Care</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-green-600">Instagram</a></li>
              <li><a href="#" className="hover:text-green-600">Facebook</a></li>
              <li><a href="#" className="hover:text-green-600">Pinterest</a></li>
              <li><a href="#" className="hover:text-green-600">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Grow Green. All rights reserved. Made by Bigyan Adhikari</p>
        </div>
      </div>
    </footer>
  );
}