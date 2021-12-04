import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

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
    userDataListener: (state) => {
      const tokenCookies = Cookies.get('token');
      if (tokenCookies) {
        const decodeAtob = window.atob(`${tokenCookies}`);
        const decodeJwt = jwtDecode(decodeAtob);
        state.data = decodeJwt.user;
      } else {
        state.data = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataUser, userDataListener } = userDataSlice.actions;

export default userDataSlice.reducer;
