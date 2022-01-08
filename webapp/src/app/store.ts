import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import authSaga from './modules/authSaga';
import authReducer from './modules/authSlice';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(authSaga)]);
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
