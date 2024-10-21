import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
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
  storage: AsyncStorage,
};

// Combine your reducers into one root reducer

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor object
const persistor = persistStore(store);

export {store, persistor};
