import { configureStore } from '@reduxjs/toolkit';
import searchKeySlice from 'features/location/searchKeySlice';
import setLocationSlice from 'features/location/locationInfoSlice';

export default configureStore({
  reducer: {
    searchKey: searchKeySlice,
    locationInfo: setLocationSlice,
  },
});
