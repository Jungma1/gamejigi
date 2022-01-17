import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUser, setUser } from '../app/modules/authSlice';
import { setStorageItem, STORAGE_KEY } from '../lib/storage';

export default function useAuthEffect() {
  const dispatch = useAppDispatch();
  const { user, currentUser, isError } = useAppSelector(state => state.auth);

  if (!currentUser && !isError) {
    dispatch(getUser());
  }

  useEffect(() => {
    if (!currentUser) return;
    if (user !== currentUser) {
      setStorageItem(STORAGE_KEY, currentUser);
      dispatch(setUser(currentUser));
    }
  }, [currentUser, dispatch, user]);
}
