import { createSlice } from '@reduxjs/toolkit';

export const searchKeySlice = createSlice({
  name: 'searchKey',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchKey } = searchKeySlice.actions;

export default searchKeySlice.reducer;
