
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount:0,
  total:0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cartItems.push(item);
      state.amount += 1;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item._id !== itemId);
      state.amount -= 1;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


