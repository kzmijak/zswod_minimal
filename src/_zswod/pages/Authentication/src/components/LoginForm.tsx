import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginFormContent } from '../models/LoginFormContent';
import { yupStringSchemas } from '../utils/yupStringSchemas';
import { ErrorSocket } from './utils/ErrorSocket';

const { email, password } = yupStringSchemas;

const schema = yup.object().shape({
  email,
  password,
});

type LoginFormProps = {
  formId: string;
  onSubmit: (content: LoginFormContent) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit, formId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormContent>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <Stack id={formId} component="form" minWidth={1} onSubmit={handleSubmit(onSubmit)} spacing={1}>
      <ErrorSocket message={errors.email?.message}>
        <TextField fullWidth {...register('email')} label="Email" error={Boolean(errors.email)} />
      </ErrorSocket>
      <ErrorSocket message={errors.password?.message}>
        <TextField
          fullWidth
          {...register('password')}
          type="password"
          label="Hasło"
          error={Boolean(errors.password)}
        />
      </ErrorSocket>
    </Stack>
  );
};

export { LoginForm };
