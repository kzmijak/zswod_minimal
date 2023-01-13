import { LoadingButton } from '@mui/lab';
import { FC } from 'react';
import { FlyIllustration } from 'src/_zswod/assets/illustration_fly';
import { JoinIllustration } from 'src/_zswod/assets/illustration_join';
import { SuperWomanIllustration } from 'src/_zswod/assets/illustration_super_woman';
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
      <RegisterForm onSubmit={handleSubmit} />
      <LoadingButton variant="contained">Zarejestruj się</LoadingButton>
    </AuthLayout>
  );
};

export { RegisterView };
