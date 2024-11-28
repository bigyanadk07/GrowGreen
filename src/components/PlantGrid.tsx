import React, { useState } from 'react';
import { PlantCard } from './PlantCard';
import { plants } from '../data/plants';

export const PlantGrid:React.FC = () =>{
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPlants = selectedCategory === 'all'
    ? plants
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="shop">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Plants</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'all'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Plants
        </button>
        <button
          onClick={() => setSelectedCategory('indoor')}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'indoor'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Indoor
        </button>
        <button
          onClick={() => setSelectedCategory('outdoor')}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'outdoor'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Outdoor
        </button>
        <button
          onClick={() => setSelectedCategory('succulent')}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'succulent'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Succulents
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}