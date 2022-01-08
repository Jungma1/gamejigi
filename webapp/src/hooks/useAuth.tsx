import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setUser } from '../app/modules/authSlice';

export function useAuth() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  const onClick = () => {
    dispatch(setUser());
  };

  return { onClick, user };
}
