import React, { useCallback } from 'react';
import { registration } from '../../../reducers/authReducer';
import { selectIsError, selectIsLoading, selectMessage } from '../../../selectors/auth';
import { useAppDispatch, useAppSelector } from '../../../store';
import Registration from './Registration';

interface UserData {
  email: string
  username: string
  password: string
}

const RegistrationContainer: React.FC = () => {

  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);
  const message = useAppSelector(selectMessage);

  const dispatch = useAppDispatch();
  const registerUser = useCallback(
    (userData: UserData) => dispatch(registration(userData)),
    [dispatch]
  );

  return (
    <Registration registerUser={registerUser} isLoading={isLoading} isError={isError} message={message} />
  )
}

export default RegistrationContainer;
