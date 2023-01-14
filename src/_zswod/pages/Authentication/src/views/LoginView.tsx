import { LoadingButton } from '@mui/lab';
import { Alert, Grow, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { LogicIllustration } from 'src/_zswod/assets/illustration_logic';
import { api } from 'src/_zswod/modules/Axios';
import { useJwt } from 'src/_zswod/modules/User';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { AuthTemplate } from '../components/AuthTemplate';
import { LoginForm } from '../components/LoginForm';
import { LoginFormContent } from '../models/LoginFormContent';

const executeSignIn = async (body: LoginFormContent) => {
  const response = await api.post<string>('auth/sign-in', body);
  return response.data;
};

const LoginView: FC = () => {
  const { setToken } = useJwt();
  const [status, setStatus] = useState<RequestStatus>('idle');
  const formId = 'login-form';

  const handleSubmit = async (body: LoginFormContent) => {
    setStatus('loading');
    try {
      const token = await executeSignIn(body);
      setToken(token);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AuthTemplate
      title="Zaloguj się"
      subtitle="Ponieważ fajnie jest być sobą! 🤠"
      illustration={<LogicIllustration />}
      linkRegister
      linkResetPassword
    >
      <Stack spacing={2}>
        <LoginForm formId={formId} onSubmit={handleSubmit} />
        <LoadingButton
          loading={status === 'loading'}
          form={formId}
          variant="contained"
          type="submit"
        >
          Zaloguj
        </LoadingButton>

        {status === 'error' && (
          <Grow in>
            <Alert variant="standard" severity="error">
              Coś poszło nie tak
            </Alert>
          </Grow>
        )}
      </Stack>
    </AuthTemplate>
  );
};

export { LoginView };
