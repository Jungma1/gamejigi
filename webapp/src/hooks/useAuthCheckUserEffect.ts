import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setUser, setPayloadUser } from '../app/modules/authSlice';
import userStorage from '../lib/userStorage';

export default function useAuthCheckUserEffect() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tempUser = userStorage.get();
    if (!tempUser) return;

    dispatch(setPayloadUser(tempUser));
    dispatch(setUser());
  }, [dispatch]);
}
