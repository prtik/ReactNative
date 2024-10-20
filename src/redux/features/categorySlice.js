// slices/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ["All"], // Array to hold the categories
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload); // Add new category to the array
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
