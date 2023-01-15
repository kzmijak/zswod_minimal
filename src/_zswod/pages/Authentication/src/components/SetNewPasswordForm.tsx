import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SetNewPasswordFormContent } from '../models/SetNewPasswordFormContent';
import { yupStringSchemas } from '../utils/yupStringSchemas';
import { ErrorSocket } from './utils/ErrorSocket';

const { password, passwordConfirm } = yupStringSchemas;

const schema = yup.object().shape({
  password,
  passwordConfirm,
});

type SetNewPasswordFormProps = {
  formId: string;
  onSubmit: (content: SetNewPasswordFormContent) => void;
};

const SetNewPasswordForm: FC<SetNewPasswordFormProps> = ({ onSubmit, formId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetNewPasswordFormContent>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return (
    <Stack spacing={2} component="form" id={formId} onSubmit={handleSubmit(onSubmit)}>
      <ErrorSocket message={errors.password?.message}>
        <TextField
          {...register('password')}
          fullWidth
          label="Hasło"
          type="password"
          error={Boolean(errors.password)}
        />
      </ErrorSocket>
      <ErrorSocket message={errors.passwordConfirm?.message}>
        <TextField
          {...register('passwordConfirm')}
          fullWidth
          label="Powtórz hasło"
          type="password"
          error={Boolean(errors.passwordConfirm)}
        />
      </ErrorSocket>
    </Stack>
  );
};

export { SetNewPasswordForm };
