import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// Configure Redux store for the Online Library system
// Currently includes only the books slice, can be extended in the future
export const store = configureStore({
  reducer: {
    books: booksReducer, // State for managing books list
  },
});
