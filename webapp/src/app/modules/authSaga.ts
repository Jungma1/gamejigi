import client from '../../lib/api/client';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  logout,
  logoutError,
  logoutSucceed,
  setUser,
  setUserError,
  setUserSucceed,
} from './authSlice';

export function* checkSaga(): Generator {
  try {
    const result: any = yield call(client.get, '/api/auth/check');
    yield put(setUserSucceed(result.data));
  } catch (err) {
    yield put(setUserError(err));
  }
}

export function* logoutSaga(): Generator {
  try {
    yield call(client.get, '/api/auth/logout');
    yield put(logoutSucceed());
  } catch (err) {
    yield put(logoutError(err));
  }
}

export default function* authSaga() {
  yield takeLatest(setUser, checkSaga);
  yield takeLatest(logout, logoutSaga);
}
