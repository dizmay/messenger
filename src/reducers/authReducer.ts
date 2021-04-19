import types from '../actions/auth/types';

export interface AuthStateType {
  isLogged: boolean | null,
  isError: boolean,
  message: string,
  id: number | null,
  email: string,
  username: string,
  isLoading: boolean,
}

interface ActionType {
  type: string
  payload?: any
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

const authReducer = (state = initialState, action: ActionType): AuthStateType => {
  switch (action.type) {

    case types.REGISTRATION:
      return { ...state, isLoading: true, message: '' };

    case types.REGISTRATION_SUCCESS:
      return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, isError: false };

    case types.REGISTRATION_FAILED:
      return { ...state, isLoading: false, message: action.payload, isLogged: false, isError: true };

    case types.LOGIN:
      return { ...state, isLoading: true, message: '' };

    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, isError: false };

    case types.LOGIN_FAILED:
      return { ...state, isLoading: false, message: action.payload, isLogged: false, isError: true  };

    case types.SET_CURRENT_USER:
      return { ...state, isLoading: true }

    case types.SET_CURRENT_USER_SUCCESS:
      return { ...state, isLoading: false, id: action.payload.id, email: action.payload.email, username: action.payload.username, isLogged: true, message: '', isError: false }

    case types.SET_CURRENT_USER_FAILED:
      return { ...state, isLoading: false, isLogged: false, isError: true }

    case types.LOGOUT:
      return { ...state, isLoading: true };

    case types.LOGOUT_SUCCESS:
      return { ...state, isLoading: false, id: null, email: '', username: '', isLogged: false, message: ''  };

    default:
      return state;
  }
}

export default authReducer;