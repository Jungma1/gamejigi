import { useState } from 'react';
import { User } from '../app/modules/authSlice';
import useAuth from './useAuth';

export default function useSetting() {
  const { user } = useAuth();
  const [inputs, setInputs] = useState<User>({
    no: 0,
    username: user ? user.username : '',
    thumbnail: '',
    short_word: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { inputs, onChange };
}
