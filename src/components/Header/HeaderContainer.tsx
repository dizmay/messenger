import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';
import Header from './Header';

interface IProps {
  handleClick: () => void
  isLogged: boolean | null
}

const HeaderContainer: React.FC<IProps> = ({ handleClick, isLogged }) => {

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
