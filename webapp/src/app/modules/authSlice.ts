import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  username: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isSucceed: boolean;
  isError: any;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isSucceed: false,
  isError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLoading = true;
    },
    loginSucceed: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isSucceed = true;
      state.isLoading = false;
    },
    loginError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { login, loginSucceed, loginError } = actions;

export default authReducer;
