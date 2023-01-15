import { LoadingButton } from '@mui/lab';
import { Alert, AlertTitle, Grow, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { WonderIllustration } from 'src/_zswod/assets/illustration_wonder';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { requestPasswordReset, getRequestPasswordResetError } from '../api/requestPasswordReset';
import { AuthTemplate } from '../components/AuthTemplate';
import { ResetPasswordForm } from '../components/ResetPasswordForm';
import { ResetPasswordFromContent } from '../models/ResetPasswordFromContent';

const ResetPasswordView: FC = () => {
  const formId = 'reset-password';
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async ({ email }: ResetPasswordFromContent) => {
    setStatus('loading');
    try {
      await requestPasswordReset(email);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(getRequestPasswordResetError(err));
    }
  };

  const altContent = (
    <Grow in>
      <Alert severity="success" variant="outlined">
        <AlertTitle>Poszło!</AlertTitle>
        <Typography>
          Na twoim koncie wkrótce powinna się znaleźć wiadomość z linkiem do nadania nowego hasła
        </Typography>
      </Alert>
    </Grow>
  );

  return (
    <AuthTemplate
      title="Zresetuj hasło"
      subtitle="Bo przecież każdemu się czasem zdarza coś zagubić 🤭"
      illustration={<WonderIllustration />}
      linkLogin
      linkRegister
    >
      {status === 'success' ? (
        altContent
      ) : (
        <Stack spacing={3}>
          <ResetPasswordForm formId={formId} onSubmit={handleSubmit} />
          <LoadingButton
            loading={status === 'loading'}
            variant="contained"
            type="submit"
            form={formId}
          >
            Wyślij E-Mail
          </LoadingButton>
          {status === 'error' && <Alert severity="error">{error} </Alert>}
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { ResetPasswordView };
