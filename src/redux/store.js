import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native
import incomeInfoReducer from './features/incomeSlice'; 
import categoryReducer from './features/categorySlice';
import expenseReducer from './features/expenseSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  incomeInfoReducer: incomeInfoReducer,
  categoryReducer: categoryReducer,
  expenses: expenseReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for persistence in React Native
};

// Combine your reducers into one root reducer


// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false, // To handle non-serializable data (like AsyncStorage)
  // }),
});

// Create the persistor object
const persistor = persistStore(store);

export { store, persistor };


// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import incomeInfoReducer from './features/incomeSlice'; 
// import categoryReducer from './features/categorySlice';
// import expenseReducer from './features/expenseSlice';
//  // Example slice

// const store = configureStore({
//   reducer: {
//     incomeInfoReducer: incomeInfoReducer,
//     categoryReducer:categoryReducer,
//     expenses: expenseReducer,
//      // You can add more reducers here
//   },
// });

// export default store;
