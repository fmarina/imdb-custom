import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Authentication/actions/actionCreators';
import { useNavigation } from '@react-navigation/native';
import { Account as AccountComponent } from './Account';

const Account = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const { username } = accountDetail;

  const handleOnPress = () => {
    dispatch(logout(sessionId));
    navigation.navigate('Authentication');
  };

  return <AccountComponent username={username} handleOnPress={handleOnPress} />;
};

export default Account;
