import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setModalVisible, setPayloadUser } from '../app/modules/authSlice';
import client from '../lib/api/client';
import userStorage from '../lib/userStorage';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, modalVisible } = useAppSelector((state) => state.auth);
  const [closed, setClosed] = useState(false);

  const handleChangeModalVisible = () => {
    dispatch(setModalVisible(!modalVisible));
  };

  const handleClickLogout = async () => {
    try {
      await client.get('/api/auth/logout');
    } catch {}

    dispatch(setPayloadUser(null));
    userStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (modalVisible) {
      setClosed(true);
    } else {
      timeoutId = setTimeout(() => setClosed(false), 200);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [modalVisible]);

  return {
    user,
    closed,
    modalVisible,
    handleChangeModalVisible,
    handleClickLogout,
  };
}
