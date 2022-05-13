import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateUser, User } from '../../../app/modules/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function useSetting() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  // const schema = yup.object({
  //   displayName: yup.string().required(),
  // });
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<User>({
    mode: 'all',
    defaultValues: {
      no: user?.no && user.no,
      displayName: user?.displayName && user.displayName,
      shortWord: user?.shortWord && user.shortWord,
      blogUrl: user?.blogUrl && user.blogUrl,
      githubUrl: user?.githubUrl && user.githubUrl,
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(updateUser(data));
  };

  return { onSubmit, handleSubmit, register, errors, user };
}
