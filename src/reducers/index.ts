import { combineReducers } from 'redux';
import authReducer, { AuthStateType } from './authReducer';

export interface RootState {
  auth: AuthStateType
}

export default combineReducers({
  auth: authReducer
});