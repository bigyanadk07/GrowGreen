export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'indoor' | 'outdoor' | 'succulent';
  description: string;
  careLevel: 'easy' | 'medium' | 'expert';
  light: 'low' | 'medium' | 'high';
  water: 'low' | 'medium' | 'high';
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}