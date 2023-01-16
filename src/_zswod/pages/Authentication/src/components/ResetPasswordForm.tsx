import { FC } from 'react';
import { yupStringSchemas } from '../utils/yupStringSchemas';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ResetPasswordFromContent } from '../models/ResetPasswordFromContent';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { ErrorSocket } from '../../../../components/ErrorSocket';

const { email } = yupStringSchemas;

const schema = yup.object().shape({
  email,
});

type ResetPasswordFormProps = {
  onSubmit: (form: ResetPasswordFromContent) => void;
  formId: string;
};

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ formId, onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetPasswordFromContent>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <Stack component="form" id={formId} onSubmit={handleSubmit(onSubmit)}>
      <ErrorSocket message={errors.email?.message}>
        <TextField {...register('email')} fullWidth label="Email" error={Boolean(errors.email)} />
      </ErrorSocket>
    </Stack>
  );
};

export { ResetPasswordForm };
