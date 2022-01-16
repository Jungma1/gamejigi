import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../app/modules/authSlice';
import { useAuth } from './useAuth';

export default function useAuthEffect() {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(setUser());
    }
  }, [user, dispatch]);
}
