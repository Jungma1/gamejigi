import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += 1;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { incrementByAmount } = actions;

export default authReducer;
