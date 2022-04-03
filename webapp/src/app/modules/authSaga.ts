import client from '../../lib/api/client';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser, setUserError, setUserSucceed, updateUser, updateUserError, User } from './authSlice';
import userStorage from '../../lib/userStorage';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getUserSaga(): Generator {
  try {
    const result: any = yield call(client.get, '/api/auth/check');
    userStorage.set(result.data);
    yield put(setUserSucceed(result.data));
  } catch (err) {
    yield put(setUserError(err));
  }
}

export function getUserErrorSaga() {
  try {
    userStorage.clear();
  } catch (e) {
    console.log('localStorage is not working');
  }
}

export function* postUpdateUserSaga(action: PayloadAction<User>): Generator {
  try {
    console.log(action.payload); // api post 호출
  } catch (err) {
    yield put(updateUserError(err))
  }
}

export default function* authSaga() {
  yield takeLatest(setUser, getUserSaga);
  yield takeLatest(setUserError, getUserErrorSaga);
  yield takeLatest(updateUser, postUpdateUserSaga);
}
