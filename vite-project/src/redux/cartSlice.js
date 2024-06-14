import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  qty: 1,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
        state.amount += 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find(item => item._id === itemId);
      if (itemToRemove) {
        state.cartItems = state.cartItems.filter(item => item._id !== itemId);
        state.amount -= itemToRemove.qty;
      }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload._id);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload._id);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      } else if (cartItem && cartItem.qty === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== payload._id);
        state.amount -= 1;
      }
    },

    calculateTotals: (state) => {;
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.qty * item.price_id.original_price 
      });
      state.total = total;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
