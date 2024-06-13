
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
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
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
    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item._id === payload._id);
      cartItem.__v = cartItem.__v +1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.__v = cartItem.__v - 1;
    },
  },
});
export const { addToCart, removeFromCart, clearCart, increase, decrease  } = cartSlice.actions;
export default cartSlice.reducer;


