import client from '../../lib/api/client';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUser, getUserError, getUserSucceed } from './authSlice';
import { removeStorageItem, STORAGE_KEY } from '../../lib/storage';

export function* checkSaga(): Generator {
  try {
    const result: any = yield call(client.get, '/api/auth/check');
    yield put(getUserSucceed(result.data));
  } catch (err) {
    removeStorageItem(STORAGE_KEY);
    yield put(getUserError(err));
  }
}

export default function* authSaga() {
  yield takeLatest(getUser, checkSaga);
}
