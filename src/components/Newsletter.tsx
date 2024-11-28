import React from 'react';

export const Newsletter:React.FC = () => {
  return (
    <div className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Green Community
          </h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter for plant care tips, special offers, and new arrivals
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}