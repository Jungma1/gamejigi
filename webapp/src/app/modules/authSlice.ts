import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  username: string;
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
    setUser: state => {
      state.isLoading = true;
    },
    setUserSucceed: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isSucceed = true;
      state.isLoading = false;
    },
    setUserError: (state, action) => {
      state.user = null;
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { setUser, setUserSucceed, setUserError } = actions;

export default authReducer;
