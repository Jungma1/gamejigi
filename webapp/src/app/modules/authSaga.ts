import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser, setUserError, setUserSucceed } from './authSlice';

async function authApi() {
  return await axios.get('http://localhost:4000/api/auth/check', {
    withCredentials: true,
  });
}

export function* loginSaga(): Generator {
  try {
    const result: any = yield call(authApi);
    yield put(setUserSucceed(result.data));
  } catch (err) {
    yield put(setUserError(err));
  }
}

export default function* authSaga() {
  yield takeLatest(setUser, loginSaga);
}
