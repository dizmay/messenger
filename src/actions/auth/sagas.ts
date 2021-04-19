import { decode } from 'jsonwebtoken';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { authAPI } from '../../API';
import {
  setCurrentUserFailed,
  setCurrentUserSuccess,
  registrationFailed, registrationSuccess, loginSuccess, loginFailed, logoutSuccess,
} from './actionCreators';
import { setAuthToken } from '../../utils/setAuthToken';
import types from './types';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { LoginData, UserData } from './interfaces';

interface ServerResponse {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string
}

interface UserDataPayload {
  type: string
  payload: UserData
}

interface LoginDataPayload {
  type: string
  payload: LoginData
}

interface CurrentUserPayload {
  type: string
  payload: string
}

function* registerUser(action: UserDataPayload) {
  try {
    const { payload } = action;
    const response: ServerResponse = yield call(authAPI.createUser, payload);
    const token: string = response.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    const decoded: any = decode(token);
    yield put(registrationSuccess(decoded));
  }
  catch (error) {
    localStorage.removeItem('token');
    yield put(registrationFailed(getErrorMessage(error)));
  }
}

function* loginUser(action: LoginDataPayload) {
  try {
    const { payload } = action;
    const response: ServerResponse = yield call(authAPI.loginUser, payload);
    const token: string = response.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    const decoded: any = decode(token);
    yield put(loginSuccess(decoded));
  }
  catch (error) {
    localStorage.removeItem('token');
    yield put(loginFailed(getErrorMessage(error)));
  }
}

function* setCurrentUser(action: CurrentUserPayload) {
  try {
    const { payload } = action;
    const decoded: any = decode(payload);
    yield put(setCurrentUserSuccess(decoded));
  }
  catch (error) {
    yield put(setCurrentUserFailed(error.message));
  }
}

function* logoutUser() {
  localStorage.removeItem('token');
  yield put(logoutSuccess());
}

export function* watchAuth() {
  yield takeEvery(types.REGISTRATION, registerUser);
  yield takeEvery(types.LOGIN, loginUser);
  yield takeEvery(types.SET_CURRENT_USER, setCurrentUser);
  yield takeEvery(types.LOGOUT, logoutUser);
}
