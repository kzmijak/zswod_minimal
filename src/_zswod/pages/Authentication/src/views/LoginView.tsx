import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { LogicIllustration } from 'src/_zswod/assets/illustration_logic';
import { useJwt } from 'src/_zswod/modules/User';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getSignInError, signIn } from '../api/signIn';
import { AuthTemplate } from '../components/AuthTemplate';
import { LoginForm } from '../components/LoginForm';
import { Warning } from '../components/utils/Warning';
import { LoginFormContent } from '../models/LoginFormContent';

const LoginView: FC = () => {
  const { login } = useJwt();
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');
  const formId = 'login-form';

  const handleSubmit = async (body: LoginFormContent) => {
    setStatus('loading');
    try {
      const token = await signIn(body);
      login(token);
      setStatus('success');
    } catch (err) {
      setError(getSignInError(err));
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
      <Stack spacing={3}>
        <LoginForm formId={formId} onSubmit={handleSubmit} />
        <LoadingButton
          loading={status === 'loading'}
          form={formId}
          variant="contained"
          type="submit"
        >
          Zaloguj
        </LoadingButton>

        {status === 'error' && <Warning content={error} />}
      </Stack>
    </AuthTemplate>
  );
};

export { LoginView };
