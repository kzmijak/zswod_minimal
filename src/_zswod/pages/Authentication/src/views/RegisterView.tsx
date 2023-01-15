import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { JoinIllustration } from 'src/_zswod/assets/illustration_join';
import { api } from 'src/_zswod/modules/Axios';
import { AuthTemplate } from '../components/AuthTemplate';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterFormContent } from '../models/RegisterFormContent';

const executeCreateUser = async (request: RegisterFormContent) => {
  await api.post('auth/sign-up', request);
};

const RegisterView: FC = () => {
  const formId = 'register';

  const handleSubmit = async (body: RegisterFormContent) => {
    try {
      await executeCreateUser(body);
      alert('Wszystko git');
    } catch {
      alert('Coś poszło nie tak');
    }
  };

  return (
    <AuthTemplate
      title="Zarejestruj się"
      subtitle="Wszyscy już na Ciebie czekamy!"
      illustration={<JoinIllustration />}
      linkLogin
      linkResetPassword
    >
      <Stack spacing={3}>
        <RegisterForm formId={formId} onSubmit={handleSubmit} />
        <LoadingButton form={formId} type="submit" variant="contained">
          Zarejestruj się
        </LoadingButton>
      </Stack>
    </AuthTemplate>
  );
};

export { RegisterView };
