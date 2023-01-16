import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { JoinIllustration } from 'src/_zswod/assets/illustration_join';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getSignUpError, signUp } from '../api/signUp';
import { AuthTemplate } from '../components/AuthTemplate';
import { RegisterForm } from '../components/RegisterForm';
import { Warning } from '../components/utils/Warning';
import { RegisterFormContent } from '../models/RegisterFormContent';

const RegisterView: FC = () => {
  const formId = 'register';
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [showAlt, setShowAlt] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (body: RegisterFormContent) => {
    setStatus('loading');
    try {
      await signUp(body);
      setStatus('success');
      setShowAlt(true);
    } catch (err) {
      setStatus('error');
      setError(getSignUpError(err));
    }
  };

  const altContent = (
    <Warning
      content="Rejestracja zakończyła się sukcesem, możesz teraz się zalogować!"
      error={false}
    />
  );

  return (
    <AuthTemplate
      title="Zarejestruj się"
      subtitle="Wszyscy już na Ciebie czekamy!"
      illustration={<JoinIllustration />}
      linkLogin
      linkResetPassword
    >
      {showAlt ? (
        altContent
      ) : (
        <Stack spacing={3}>
          <RegisterForm formId={formId} onSubmit={handleSubmit} />
          <LoadingButton
            loading={status === 'loading'}
            form={formId}
            type="submit"
            variant="contained"
          >
            Zarejestruj się
          </LoadingButton>
          {status === 'error' && <Warning content={error} />}
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { RegisterView };
