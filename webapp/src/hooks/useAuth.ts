import { useAppSelector } from '../app/hooks';

export function useAuth() {
  const { user, modalVisible } = useAppSelector(state => state.auth);

  return { user, modalVisible };
}
