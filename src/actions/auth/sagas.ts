import { decode } from 'jsonwebtoken';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { authAPI } from '../../API';
import {
  setCurrentUserFailed,
  setCurrentUserSuccess,
  registrationFailed, registrationSuccess, loginSuccess, loginFailed,
} from '../../reducers/authReducer';
import { setAuthToken } from '../../utils/setAuthToken';
import types from './types';
import { JwtDecodeType, LoginData, ResponseUserData, UserData } from './interfaces';

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
    const response: string = yield call(authAPI.createUser, payload);
    localStorage.setItem('token', response);
    setAuthToken(response);
    const decoded: JwtDecodeType = decode(response);
    yield put(registrationSuccess(decoded as ResponseUserData));

  }
  catch (error) {
    localStorage.removeItem('token');
    yield put(registrationFailed(error));
  }
}

function* loginUser(action: LoginDataPayload) {
  try {
    const { payload } = action;
    const response: string = yield call(authAPI.loginUser, payload);
    localStorage.setItem('token', response);
    const decoded: JwtDecodeType = decode(response);
    yield put(loginSuccess(decoded as ResponseUserData));
  }
  catch (error) {
    localStorage.removeItem('token');
    yield put(loginFailed(error));
  }
}

function* setCurrentUser(action: CurrentUserPayload) {
  try {
    const { payload } = action;
    const decoded: JwtDecodeType = decode(payload);
    yield put(setCurrentUserSuccess(decoded as ResponseUserData));
  }
  catch (error) {
    yield put(setCurrentUserFailed());
  }
}

export function* watchAuth() {
  yield takeEvery(types.REGISTRATION, registerUser);
  yield takeEvery(types.LOGIN, loginUser);
  yield takeEvery(types.SET_CURRENT_USER, setCurrentUser);
}
