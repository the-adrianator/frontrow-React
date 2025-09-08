import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true;
      // eslint-disable-next-line no-param-reassign
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accountId', action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;
