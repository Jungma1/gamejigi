import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateUser, User } from '../app/modules/authSlice';

export default function useSetting() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const initialInputValues: User = user
    ? {
        no: user.no,
        displayName: user.displayName,
        thumbnail: user.thumbnail,
        shortWord: user.shortWord,
        blogUrl: user.blogUrl,
        githubUrl: user.githubUrl,
      }
    : {
        no: 0,
        displayName: '',
        thumbnail: '',
        shortWord: '',
        blogUrl: '',
        githubUrl: '',
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
