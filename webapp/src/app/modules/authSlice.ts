import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  username: string;
}

export interface AuthState {
  user: User | null;
  currentUser: User | null;
  isLoading: boolean;
  isSucceed: boolean;
  isError: null;
}

const initialState: AuthState = {
  user: null,
  currentUser: null,
  isLoading: false,
  isSucceed: false,
  isError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    getUser: state => {
      state.isLoading = true;
    },
    getUserSucceed: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isSucceed = true;
      state.isError = null;
      state.isLoading = false;
    },
    getUserError: (state, action) => {
      state.user = null;
      state.currentUser = null;
      state.isError = action.payload;
      state.isSucceed = false;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { setUser, getUser, getUserSucceed, getUserError } = actions;

export default authReducer;
