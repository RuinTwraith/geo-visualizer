import { createSlice } from '@reduxjs/toolkit';

export const locationInfoSlice = createSlice({
  name: 'locationInfo',
  initialState: {},
  reducers: {
    setLocationInfo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setLocationInfo } = locationInfoSlice.actions;

export default locationInfoSlice.reducer;
