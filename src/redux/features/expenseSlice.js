// slices/expenseSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expenses: [], // Holds all the expenses
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log('ccccccasdasdaasdasd', action.payload);
      state.expenses.push({
        amount: action.payload.amount,
        category: action.payload.category,
        description: action.payload.description,
      }); // Add the expense to the list
    },
  },
});

export const {addExpense} = expenseSlice.actions;
export default expenseSlice.reducer;
