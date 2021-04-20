import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JwtDecodeType, LoginData, ResponseUserData, UserData } from '../actions/auth/interfaces';

export interface AuthStateType {
  isLogged: boolean | null,
  isError: boolean,
  message: string,
  id: string | null,
  email: string,
  username: string,
  isLoading: boolean,
}

const initialState: AuthStateType = {
  isLogged: null,
  isError: false,
  message: '',
  id: null,
  email: '',
  username: '',
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registration(state, action: PayloadAction<UserData>) {
      state.isLoading = true;
      state.message = '';
    },
    registrationSuccess(state, action: PayloadAction<ResponseUserData>) {
      state.isLoading = false;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.isLogged = true;
      state.isError = false;
    },
    registrationFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.message = action.payload;
      state.isLogged = false;
      state.isError = true;
    },
    login(state, action: PayloadAction<LoginData>) {
      state.isLoading = true;
      state.message = '';
    },
    loginSuccess(state, action: PayloadAction<ResponseUserData>) {
      state.isLoading = false;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.isLogged = true;
      state.isError = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.message = action.payload;
      state.isLogged = false;
      state.isError = true;
    },
    setCurrentUser(state, action: PayloadAction<JwtDecodeType>) {
      state.isLoading = true;
    },
    setCurrentUserSuccess(state, action: PayloadAction<ResponseUserData>) {
      state.isLoading = false;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.isLogged = true;
      state.isError = false;
    },
    setCurrentUserFailed(state) {
      state.isLoading = false;
      state.isLogged = false;
    },
    logout(state) {
      state.id = null;
      state.email = '';
      state.username = '';
      state.isLogged = false;
      state.message = '';
      localStorage.removeItem('token');
    },
  }
})

export const {
  registration,
  registrationSuccess,
  registrationFailed,
  login,
  loginSuccess,
  loginFailed,
  setCurrentUser,
  setCurrentUserSuccess,
  setCurrentUserFailed,
  logout,
} = authSlice.actions;

export default authSlice.reducer;