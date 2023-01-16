import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { SoccerIllustration } from 'src/_zswod/assets/illustration_soccer';
import { SuperWomanIllustration } from 'src/_zswod/assets/illustration_super_woman';
import { IllustrationCard } from 'src/_zswod/components/IllustrationCard';
import { UserRole } from 'src/_zswod/models/User';
import * as yup from 'yup';
import { RegisterFormContent } from '../models/RegisterFormContent';
import { yupStringSchemas } from '../utils/yupStringSchemas';
import { ErrorSocket } from '../../../../components/ErrorSocket';

const { email, password, passwordConfirm, role } = yupStringSchemas;

const schema = yup.object().shape({
  email,
  password,
  passwordConfirm,
  role,
});

type RegisterFormProps = {
  onSubmit: (values: RegisterFormContent) => void;
  formId?: string;
};

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit, formId }) => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<RegisterFormContent>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleRoleSelect = (role: UserRole) => {
    setValue('role', role, { shouldValidate: true });
  };

  const { role } = useWatch<RegisterFormContent>({ control });

  return (
    <Stack component="form" id={formId} onSubmit={handleSubmit(onSubmit)} spacing={2}>
      <ErrorSocket message={errors.email?.message}>
        <TextField
          {...register('email')}
          fullWidth
          type="email"
          placeholder="Email"
          error={Boolean(errors.email)}
        />
      </ErrorSocket>
      <ErrorSocket message={errors.password?.message}>
        <TextField
          {...register('password')}
          fullWidth
          type="password"
          placeholder="Hasło"
          error={Boolean(errors.password)}
        />
      </ErrorSocket>
      <ErrorSocket message={errors.passwordConfirm?.message}>
        <TextField
          {...register('passwordConfirm')}
          fullWidth
          placeholder="Powtórz hasło"
          type="password"
          error={Boolean(errors.passwordConfirm)}
        />
      </ErrorSocket>
      <ErrorSocket message={errors.role?.message}>
        <Stack
          direction="column"
          border={(theme) =>
            `dashed 2px ${Boolean(errors.role) ? theme.palette.error.main : theme.palette.divider}`
          }
          borderRadius={2.5}
          alignItems="center"
          padding={2}
          spacing={1.5}
        >
          <Typography variant="h5">Jestem</Typography>
          <Stack direction="row" spacing={2}>
            <IllustrationCard
              onClick={() => handleRoleSelect('Student')}
              selected={role === 'Student'}
              label="Uczniem"
              illustration={<SoccerIllustration sx={{ width: 100 }} />}
            />
            <IllustrationCard
              onClick={() => handleRoleSelect('LegalGuardian')}
              selected={role === 'LegalGuardian'}
              label="Rodzicem"
              illustration={<SuperWomanIllustration sx={{ width: 100 }} />}
            />
          </Stack>
        </Stack>
      </ErrorSocket>
    </Stack>
  );
};

export { RegisterForm };
