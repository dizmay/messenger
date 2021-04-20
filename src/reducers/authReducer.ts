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

// const authReducer = (state = initialState, action: PayloadAction<ResponseUserData>): AuthStateType => {
//   switch (action.type) {

//     case types.REGISTRATION:
//       return { ...state, isLoading: true, message: '' };

//     case types.REGISTRATION_SUCCESS:
//       return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, isError: false };

//     case types.REGISTRATION_FAILED:
//       return { ...state, isLoading: false, message: action.payload, isLogged: false, isError: true };

//     case types.LOGIN:
//       return { ...state, isLoading: true, message: '' };

//     case types.LOGIN_SUCCESS:
//       return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, isError: false };

//     case types.LOGIN_FAILED:
//       return { ...state, isLoading: false, message: action.payload, isLogged: false, isError: true };

//     case types.SET_CURRENT_USER:
//       return { ...state, isLoading: true }

//     case types.SET_CURRENT_USER_SUCCESS:
//       return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, message: '', isError: false }

//     case types.SET_CURRENT_USER_FAILED:
//       return { ...state, isLoading: false, isLogged: false, isError: true }

//     case types.LOGOUT:
//       return { ...state, isLoading: true };

//     case types.LOGOUT_SUCCESS:
//       return { ...state, isLoading: false, id: null, email: '', username: '', isLogged: false, message: '' };

//     default:
//       return state;
//   }
// }

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