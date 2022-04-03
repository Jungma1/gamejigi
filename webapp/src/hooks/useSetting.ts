import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateUser, User } from '../app/modules/authSlice';

export default function useSetting() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const initialInputValues = user
    ? {
        no: user.no,
        username: user.username,
        thumbnail: user.thumbnail,
        short_word: user.short_word,
        blog_url: user.blog_url,
        github_url: user.github_url,
      }
    : {
        no: 0,
        username: '',
        thumbnail: '',
        short_word: '',
        blog_url: '',
        github_url: '',
      };

  const [inputs, setInputs] = useState<User>(initialInputValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(inputs));
  };

  return { inputs, onChange, onSubmit };
}
