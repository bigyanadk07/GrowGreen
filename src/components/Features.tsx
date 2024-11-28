import { Truck, Shield, Leaf, Heart } from 'lucide-react';

export function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Truck className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          <div className="text-center">
            <Shield className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Plant Insurance</h3>
            <p className="text-gray-600">30-day guarantee</p>
          </div>
          <div className="text-center">
            <Leaf className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Care Tips</h3>
            <p className="text-gray-600">Detailed care guides</p>
          </div>
          <div className="text-center">
            <Heart className="h-10 w-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Plant Care Support</h3>
            <p className="text-gray-600">24/7 customer service</p>
          </div>
        </div>
      </div>
    </div>
  );
}