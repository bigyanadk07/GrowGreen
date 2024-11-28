import { Plant } from '../types';
import { Droplets, Sun } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {plant.category}
          </span>
        </div>
        <p className="text-green-600 font-bold mt-1">${plant.price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mt-2">{plant.description}</p>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <Sun className="h-4 w-4 mr-1" />
          <span className="capitalize mr-4">{plant.light} light</span>
          <Droplets className="h-4 w-4 mr-1" />
          <span className="capitalize">{plant.water} water</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Care Level: {plant.careLevel}</span>
          <button
            onClick={() => addToCart(plant)}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}