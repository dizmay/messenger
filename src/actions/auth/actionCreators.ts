import types from './types';

interface UserData {
  email: string
  username: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const registration = (userData: UserData) => ({
  type: types.REGISTRATION,
  payload: userData
})

export const registrationSuccess = (userData: any) => ({
  type: types.REGISTRATION_SUCCESS,
  payload: userData
})

export const registrationFailed = (error: string) => ({
  type: types.REGISTRATION_FAILED,
  payload: error
})

export const login = (loginData: LoginData) => ({
  type: types.LOGIN,
  payload: loginData
})

export const loginSuccess = (userData: any) => ({
  type: types.LOGIN_SUCCESS,
  payload: userData
})

export const loginFailed = (message: string) => ({
  type: types.LOGIN_FAILED,
  payload: message
})

export const setCurrentUser = (token: string | null) => ({
  type: types.SET_CURRENT_USER,
  payload: token
})

export const setCurrentUserSuccess = (token: string) => ({
  type: types.SET_CURRENT_USER_SUCCESS,
  payload: token
})

export const setCurrentUserFailed = (message: string) => ({
  type: types.SET_CURRENT_USER_FAILED,
  payload: message
})

export const logout = () => ({
  type: types.LOGOUT
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
})