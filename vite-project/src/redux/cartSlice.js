
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
      state.items.push(item);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item._id !== itemId);
    },
  },
});
// console.log(cartSlice);
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
