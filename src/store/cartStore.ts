import { create } from 'zustand';
import { CartStore, Plant } from '../types';

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (plant: Plant) => {
    try {
      set((state) => {
        const existingItem = state.items.find((item) => item.plant.id === plant.id);
        if (existingItem) {
          return {
            items: state.items.map((item) =>
              item.plant.id === plant.id
                ? { ...item, quantity: Math.min(item.quantity + 1, 5) }
                : item
            ),
          };
        }
        return { items: [...state.items, { plant, quantity: 1 }] };
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  },
  removeFromCart: (plantId: string) => {
    try {
      set((state) => ({
        items: state.items.filter((item) => item.plant.id !== plantId),
      }));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  },
  updateQuantity: (plantId: string, quantity: number) => {
    try {
      if (quantity < 1 || quantity > 5) return;
      set((state) => ({
        items: state.items.map((item) =>
          item.plant.id === plantId ? { ...item, quantity } : item
        ),
      }));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  },
  clearCart: () => set({ items: [] }),
  get total() {
    return get().items.reduce(
      (sum, item) => sum + item.plant.price * item.quantity,
      0
    );
  },
}));