import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  username: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isSucceed: boolean;
  isError: null;
  modalVisible: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isSucceed: false,
  isError: null,
  modalVisible: false,
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
      state.isError = null;
      state.isLoading = false;
    },
    setUserError: (state, action) => {
      state.user = null;
      state.isError = action.payload;
      state.isSucceed = false;
      state.isLoading = false;
    },
    changeModalVisible: (state, action) => {
      
    }
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { setUser, setUserSucceed, setUserError } = actions;

export default authReducer;
