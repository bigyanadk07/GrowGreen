import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart} from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Cart } from './Cart';
import Logo from '../images/GrowGreen.png'

export const Navbar:React.FC = ()  =>{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className='w-12 h-auto' />
              <span className="ml-2 text-xl font-semibold text-gray-900">Grow Green</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <button 
                className="relative p-2"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}