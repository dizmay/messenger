import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../../actions/auth/actionCreators';
import { selectIsError, selectIsLoading, selectMessage } from '../../../selectors/auth';
import Registration from './Registration';

interface UserData {
  email: string
  username: string
  password: string
}

const RegistrationContainer: React.FC = () => {

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const message = useSelector(selectMessage);

  const dispatch = useDispatch();
  const registerUser = useCallback(
    (userData: UserData): { type: string, payload: UserData } => dispatch(registration(userData)),
    [dispatch]
  );

  return (
    <Registration registerUser={registerUser} isLoading={isLoading} isError={isError} message={message} />
  )
}

export default RegistrationContainer;
