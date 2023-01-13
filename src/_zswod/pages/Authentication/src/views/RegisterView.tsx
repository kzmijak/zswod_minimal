import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { JoinIllustration } from 'src/_zswod/assets/illustration_join';
import { api } from 'src/_zswod/modules/Axios';
import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterFormContent } from '../models/RegisterFormContent';

const executeCreateUser = async (request: RegisterFormContent) => {
  await api.post('auth/sign-up', request);
};

const RegisterView: FC = () => {
  const handleSubmit = async (body: RegisterFormContent) => {
    try {
      await executeCreateUser(body);
      alert('Wszystko git');
    } catch {
      alert('Coś poszło nie tak');
    }
  };

  return (
    <AuthLayout
      title="Zarejestruj się"
      subtitle="Wszyscy już na Ciebie czekamy!"
      illustration={<JoinIllustration />}
      linkLogin
      linkResetPassword
    >
      <Stack spacing={2}>
        <RegisterForm onSubmit={handleSubmit} />
        <LoadingButton variant="contained">Zarejestruj się</LoadingButton>
      </Stack>
    </AuthLayout>
  );
};

export { RegisterView };
