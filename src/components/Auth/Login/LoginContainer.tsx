import React, { useCallback } from 'react';
import { login } from '../../../reducers/authReducer';
import { LoginData } from '../../../actions/auth/interfaces';
import { selectIsError, selectIsLoading, selectMessage } from '../../../selectors/auth';
import { useAppDispatch, useAppSelector } from '../../../store';
import Login from './Login';

const LoginContainer = () => {

  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);
  const message = useAppSelector(selectMessage);
  
  const dispatch = useAppDispatch();
  const loginUser = useCallback(
    (loginData: LoginData) => dispatch(login(loginData)),
    [dispatch]
  )

  return (
    <Login loginUser={loginUser} isLoading={isLoading} isError={isError} message={message} />
  )
}

export default LoginContainer;
