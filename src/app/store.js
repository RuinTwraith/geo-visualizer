import { configureStore } from '@reduxjs/toolkit';
import searchKeySlice from 'features/searchKey/searchKeySlice';

export default configureStore({
  reducer: {
    searchKey: searchKeySlice,
  },
});
