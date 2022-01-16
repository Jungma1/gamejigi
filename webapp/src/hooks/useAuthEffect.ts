import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setUser } from '../app/modules/authSlice';

export default function useAuthEffect() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(setUser());
    }
  }, [user, dispatch]);
}
