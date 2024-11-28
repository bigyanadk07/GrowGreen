import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LeafIcon, ShoppingCartIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const heroFeatures = [
    {
      icon: <LeafIcon className="w-6 h-6 text-green-600" />,
      title: "Curated Selection",
      description: "Handpicked plants from around the world"
    },
    {
      icon: <ShoppingCartIcon className="w-6 h-6 text-green-600" />,
      title: "Easy Shopping",
      description: "Seamless online experience with expert guidance"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28">
          <svg 
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Breathe Life</span>{' '}
                <span className="block text-green-600 xl:inline">Into Your Space</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transform your living environment with our expertly curated plant collection. 
                From rare exotic species to low-maintenance indoor companions.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/shop"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Shop Now
                    <ArrowRightIcon 
                      className={`ml-3 -mr-1 h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} 
                    />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:justify-center lg:justify-start">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.icon}
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 group">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80&w=2000"
          alt="Beautiful plants"
        />
        <div className="absolute inset-0 bg-green-600 opacity-20 group-hover:opacity-10 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </div>
  );
}