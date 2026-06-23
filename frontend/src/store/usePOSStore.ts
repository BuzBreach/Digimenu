import { create } from 'zustand';

export interface AddOn {
  name: string;
  price: number;
}

export interface CartItem {
  id: string; // Composite ID of menuItemId + selected add-ons hash to support separate cart entries
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string | null;
  isVeg: boolean;
  notes: string;
  addOnsSelected: AddOn[];
  targetQueue: 'KITCHEN' | 'BAR';
}

interface Customer {
  id: string;
  mobile: string;
  name: string | null;
  loyaltyPoints: number;
}

interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  isVeg: boolean;
  isAvailable: boolean;
  categoryId: string;
  addOns: AddOn[] | null;
  targetQueue: 'KITCHEN' | 'BAR';
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  sortOrder: number;
  isActive: boolean;
  items: MenuItem[];
}

interface POSState {
  customer: Customer | null;
  recommendations: MenuItem[];
  pastOrders: any[];
  categories: MenuCategory[];
  selectedCategoryId: string | null;
  searchQuery: string;
  cart: CartItem[];
  activeOrder: any | null;
  tableNumber: string;
  tableLocked: boolean;
  notes: string;
  
  // Admin credentials & auth
  adminToken: string | null;
  adminUser: any | null;
  
  // Actions
  setCustomer: (customer: Customer | null) => void;
  setRecommendations: (recommendations: MenuItem[]) => void;
  setPastOrders: (orders: any[]) => void;
  setCategories: (categories: MenuCategory[]) => void;
  setSelectedCategoryId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setTableNumber: (table: string) => void;
  setTableLocked: (locked: boolean) => void;
  setOrderNotes: (notes: string) => void;
  
  // Cart Actions
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQty: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Active Order Tracking
  setActiveOrder: (order: any | null) => void;
  
  // Admin Auth Actions
  setAdminAuth: (token: string | null, user: any | null) => void;
  logoutAdmin: () => void;
}

export const usePOSStore = create<POSState>((set) => ({
  customer: null,
  recommendations: [],
  pastOrders: [],
  categories: [],
  selectedCategoryId: null,
  searchQuery: '',
  cart: [],
  activeOrder: null,
  tableNumber: '1', // Default table number
  tableLocked: false,
  notes: '',
  
  adminToken: typeof window !== 'undefined' ? localStorage.getItem('niva_admin_token') : null,
  adminUser: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('niva_admin_user') || 'null') : null,

  setCustomer: (customer) => set({ customer }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setPastOrders: (pastOrders) => set({ pastOrders }),
  setCategories: (categories) => {
    // Set default selected category to the first one available
    set((state) => ({
      categories,
      selectedCategoryId: state.selectedCategoryId || (categories.length > 0 ? categories[0].id : null),
    }));
  },
  setSelectedCategoryId: (selectedCategoryId) => set({ selectedCategoryId }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setTableNumber: (tableNumber) => set({ tableNumber }),
  setTableLocked: (tableLocked) => set({ tableLocked }),
  setOrderNotes: (notes) => set({ notes }),

  addToCart: (newItem) =>
    set((state) => {
      // Generate a composite key based on menuItemId and selected add-ons to differentiate
      const addOnsHash = newItem.addOnsSelected
        .map((a) => `${a.name}-${a.price}`)
        .sort()
        .join('|');
      const cartItemId = `${newItem.menuItemId}::${addOnsHash}`;

      const existingIndex = state.cart.findIndex((item) => item.id === cartItemId);

      if (existingIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += newItem.quantity;
        return { cart: updatedCart };
      } else {
        return {
          cart: [...state.cart, { ...newItem, id: cartItemId } as CartItem],
        };
      }
    }),

  removeFromCart: (cartItemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== cartItemId),
    })),

  updateCartQty: (cartItemId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { cart: state.cart.filter((item) => item.id !== cartItemId) };
      }
      return {
        cart: state.cart.map((item) =>
          item.id === cartItemId ? { ...item, quantity } : item
        ),
      };
    }),

  clearCart: () => set({ cart: [], notes: '' }),

  setActiveOrder: (activeOrder) => set({ activeOrder }),

  setAdminAuth: (token, user) => {
    if (token && user) {
      localStorage.setItem('niva_admin_token', token);
      localStorage.setItem('niva_admin_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('niva_admin_token');
      localStorage.removeItem('niva_admin_user');
    }
    set({ adminToken: token, adminUser: user });
  },

  logoutAdmin: () => {
    localStorage.removeItem('niva_admin_token');
    localStorage.removeItem('niva_admin_user');
    set({ adminToken: null, adminUser: null });
  },
}));
