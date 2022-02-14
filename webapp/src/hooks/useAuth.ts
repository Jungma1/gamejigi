import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setModalVisible, setPayloadUser } from '../app/modules/authSlice';
import client from '../lib/api/client';
import userStorage from '../lib/userStorage';

export function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, modalVisible } = useAppSelector(state => state.auth);

  const handleChangeModalVisible = () => {
    modalVisible
      ? dispatch(setModalVisible(false))
      : dispatch(setModalVisible(true));
  };

  const handleClickLogout = async () => {
    try {
      await client.get('/api/auth/logout');
    } catch {}

    dispatch(setPayloadUser(null));
    userStorage.clear();
    navigate('/');
  };

  return { user, modalVisible, handleChangeModalVisible, handleClickLogout };
}
