// slices/transactionSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
};

const incomeInfoSlice = createSlice({
  name: 'incomeInfoReducer',
  initialState,
  reducers: {
    setIncome: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const {setIncome} = incomeInfoSlice.actions;
export default incomeInfoSlice.reducer;
