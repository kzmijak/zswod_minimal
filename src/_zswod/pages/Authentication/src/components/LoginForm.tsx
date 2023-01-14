import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginFormContent } from '../models/LoginFormContent';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type LoginFormProps = {
  formId: string;
  onSubmit: (content: LoginFormContent) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit, formId }) => {
  const { register, handleSubmit } = useForm<LoginFormContent>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <Stack id={formId} component="form" minWidth={1} onSubmit={handleSubmit(onSubmit)} spacing={1}>
      <TextField fullWidth {...register('email')} label="Email" />
      <TextField fullWidth {...register('password')} type="password" label="Hasło" />
    </Stack>
  );
};

export { LoginForm };
