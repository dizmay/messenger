import React, { useEffect } from 'react';
import { selectIsLogged } from './selectors/auth';
import { setAuthToken } from './utils/setAuthToken';
import { setCurrentUser } from './reducers/authReducer';
import { useAppDispatch, useAppSelector } from './store';
import App from './App';
import Loader from './components/Loader/Loader';

const AppContainer = () => {

  const isLogged = useAppSelector(selectIsLogged);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogged === null) {
      const token = localStorage.getItem('token');
      setAuthToken(token);
      dispatch(setCurrentUser(token));
    }
  }, [dispatch, isLogged])

  return (
    <>
      {
        isLogged === null
          ? <Loader />
          : <App isLogged={isLogged} />
      }
    </>
  )
}

export default AppContainer;
