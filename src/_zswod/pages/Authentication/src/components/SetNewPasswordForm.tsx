import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SetNewPasswordFormContent } from '../models/SetNewPasswordFormContent';

const schema = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});

type SetNewPasswordFormProps = {
  formId: string;
  onSubmit: (content: SetNewPasswordFormContent) => void;
};

const SetNewPasswordForm: FC<SetNewPasswordFormProps> = ({ onSubmit, formId }) => {
  const { register, handleSubmit } = useForm<SetNewPasswordFormContent>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Stack spacing={2} component="form" id={formId} onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('password')} label="Hasło" type="password" />
      <TextField {...register('confirmPassword')} label="Powtórz hasło" type="password" />
    </Stack>
  );
};

export { SetNewPasswordForm };
