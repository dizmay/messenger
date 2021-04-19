import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from './selectors/auth';
import { setAuthToken } from './utils/setAuthToken';
import { setCurrentUser } from './actions/auth/actionCreators';
import App from './App';
import Loader from './components/Loader/Loader';

const AppContainer = () => {

  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthToken(token);
    dispatch(setCurrentUser(token));
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
