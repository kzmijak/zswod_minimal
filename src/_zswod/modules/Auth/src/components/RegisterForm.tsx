import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { RegisterFormContent } from '../models/RegisterFormContent';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
});

type RegisterFormProps = {
  onSubmit: (values: RegisterFormContent) => void;
};

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm<RegisterFormContent>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} type="email" placeholder="Email" />
      <TextField {...register('password')} placeholder="Hasło" />
      <TextField {...register('passwordConfirm')} placeholder="Powtórz hasło" />
      <Button type="submit">Zarejestruj</Button>
    </Stack>
  );
};

export { RegisterForm };
