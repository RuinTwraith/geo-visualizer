import { createSlice } from '@reduxjs/toolkit';

export const locationInfoSlice = createSlice({
  name: 'locationInfo',
  initialState: {
    photos: [],
    reviews: [],
  },
  reducers: {
    setLocationInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationInfo } = locationInfoSlice.actions;

export default locationInfoSlice.reducer;
