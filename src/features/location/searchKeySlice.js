import { createSlice } from '@reduxjs/toolkit';

export const searchKeySlice = createSlice({
  name: 'searchKey',
  initialState: '',
  reducers: {
    setSearchKey: (_state, action) => action.payload,
  },
});

export const { setSearchKey } = searchKeySlice.actions;

export default searchKeySlice.reducer;
