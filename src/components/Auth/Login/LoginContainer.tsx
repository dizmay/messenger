import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/auth/actionCreators';
import { selectIsError, selectIsLoading, selectMessage } from '../../../selectors/auth';
import Login from './Login';

const LoginContainer = () => {

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const message = useSelector(selectMessage);
  
  const dispatch = useDispatch();
  const loginUser = useCallback(
    (loginData) => dispatch(login(loginData)),
    [dispatch]
  )

  return (
    <Login loginUser={loginUser} isLoading={isLoading} isError={isError} message={message} />
  )
}

export default LoginContainer;
