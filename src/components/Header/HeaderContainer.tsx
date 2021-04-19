import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth/actionCreators';
import Header from './Header';

interface iProps {
  handleClick: () => void
  isLogged: boolean | null
}

const HeaderContainer: React.FC<iProps> = ({ handleClick, isLogged }) => {

  const dispatch = useDispatch();
  const logoutUser = useCallback(
    () => dispatch(logout()),
    [dispatch]
  );

  return (
    <Header handleClick={handleClick} isLogged={isLogged} logoutUser={logoutUser} />
  )
}

export default HeaderContainer;
