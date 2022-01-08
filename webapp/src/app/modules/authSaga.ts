import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login, loginError, loginSucceed } from './authSlice';

async function authApi() {
  return await axios.get('http://localhost:4000/api/auth/google');
}

export function* loginSaga(): Generator {
  try {
    const result: any = yield call(authApi);
    yield put(loginSucceed(result.data));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* authSaga() {
  yield takeLatest(login, loginSaga);
}
