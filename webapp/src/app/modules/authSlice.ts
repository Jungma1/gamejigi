import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  username: string;
  thumbnail: string;
}

export interface AuthState {
  user: User | null;
  isError: null;
  isLoading: boolean;
  modalVisible: boolean;
}

const initialState: AuthState = {
  user: null,
  isError: null,
  isLoading: false,
  modalVisible: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPayloadUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setUser: state => {
      state.isLoading = true;
    },
    setUserSucceed: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isError = null;
      state.isLoading = false;
    },
    setUserError: (state, action) => {
      state.user = null;
      state.isError = action.payload;
      state.isLoading = false;
    },
    setModalVisible: (state, action: PayloadAction<boolean>) => {
      state.modalVisible = action.payload;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const {
  setPayloadUser,
  setUser,
  setUserSucceed,
  setUserError,
  setModalVisible,
} = actions;

export default authReducer;
