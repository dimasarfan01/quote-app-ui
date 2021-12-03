import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataUser } = userDataSlice.actions;

export default userDataSlice.reducer;
