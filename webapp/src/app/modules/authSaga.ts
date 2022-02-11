import client from '../../lib/api/client';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser, setUserError, setUserSucceed } from './authSlice';
import userStorage from '../../lib/userStorage';

export function* checkSaga(): Generator {
  try {
    const result: any = yield call(client.get, '/api/auth/check');
    userStorage.set(result.data);
    yield put(setUserSucceed(result.data));
  } catch (err) {
    yield put(setUserError(err));
  }
}

export function checkErrorSaga() {
  try {
    userStorage.clear();
  } catch (e) {
    console.log('localStorage is not working');
  }
}

export default function* authSaga() {
  yield takeLatest(setUser, checkSaga);
  yield takeLatest(setUserError, checkErrorSaga);
}
