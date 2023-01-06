import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginFormContent } from '../models/LoginFormContent';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

type LoginFormProps = {
  onSubmit: (content: LoginFormContent) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginFormContent>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={1}>
      <TextField {...register('email')} type="email" placeholder="Email" />
      <TextField {...register('password')} type="password" placeholder="Hasło" />
      <Button type="submit">Zaloguj</Button>
    </Stack>
  );
};

export { LoginForm };
