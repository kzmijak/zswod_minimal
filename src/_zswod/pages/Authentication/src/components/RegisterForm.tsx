import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { SoccerIllustration } from 'src/_zswod/assets/illustration_soccer';
import { SuperWomanIllustration } from 'src/_zswod/assets/illustration_super_woman';
import { IllustrationCard } from 'src/_zswod/components/IllustrationCard';
import { UserRole } from 'src/_zswod/models/User';
import { useRwd } from 'src/_zswod/utils/useRwd';
import * as yup from 'yup';
import { RegisterFormContent } from '../models/RegisterFormContent';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
  role: yup.string().oneOf<UserRole>(['Student', 'Teacher']).required(),
});

type RegisterFormProps = {
  onSubmit: (values: RegisterFormContent) => void;
};

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const { isDesktop } = useRwd();

  const { handleSubmit, register, setValue, control } = useForm<RegisterFormContent>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  const { role } = useWatch<RegisterFormContent>({ control });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
      <TextField {...register('email')} fullWidth type="email" placeholder="Email" />
      <TextField {...register('password')} fullWidth placeholder="Hasło" />
      <TextField {...register('passwordConfirm')} fullWidth placeholder="Powtórz hasło" />
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        // spacing={2}
        // minWidth={1}
        // justifyContent="flex-end"
        // alignItems="end"
      >
        <Typography variant="h5">Jestem</Typography>
        <Stack direction="row" spacing={2}>
          <IllustrationCard
            onClick={() => setValue('role', 'Student')}
            selected={role === 'Student'}
            label="Uczniem"
            illustration={<SoccerIllustration sx={{ width: 100 }} />}
          />
          <IllustrationCard
            onClick={() => setValue('role', 'Teacher')}
            selected={role === 'Teacher'}
            label="Rodzicem"
            illustration={<SuperWomanIllustration sx={{ width: 100 }} />}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { RegisterForm };
