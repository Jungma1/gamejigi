import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../app/modules/authSlice';

export default function useAuthCallbackEffect() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (!search) return;

    dispatch(setUser());
    navigate('/');
  }, [dispatch, navigate, search]);
}
