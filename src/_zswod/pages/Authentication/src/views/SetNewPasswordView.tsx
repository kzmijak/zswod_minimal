import { Button, Stack } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SecureIllustration } from 'src/_zswod/assets/illustration_secure';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getSetNewPasswordError, setNewPassword } from '../api/setNewPassword';
import {
  getVerifyResetPasswordError,
  verifyResetPasswordToken,
} from '../api/verifyResetPasswordToken';
import { AuthTemplate } from '../components/AuthTemplate';
import { SetNewPasswordForm } from '../components/SetNewPasswordForm';
import { Warning } from '../components/utils/Warning';
import { SetNewPasswordFormContent } from '../models/SetNewPasswordFormContent';

const SetNewPasswordView: FC = () => {
  const formId = 'set-new-password';
  const { hash } = useLocation();
  const token = hash.slice(1);

  const [showAlt, setShowAlt] = useState(false);

  const [verifyTokenStatus, setVerifyTokenStatus] = useState<RequestStatus>('idle');
  const [verifyTokenError, setVerifyTokenError] = useState('');

  const [setNewPasswordStatus, setSetNewPasswordStatus] = useState<RequestStatus>('idle');
  const [setNewPasswordError, setSetNewPasswordError] = useState('');

  const executeVerifyTokenStatus = useCallback(async () => {
    setVerifyTokenStatus('loading');
    try {
      await verifyResetPasswordToken(token);
      setVerifyTokenStatus('success');
    } catch (err) {
      setVerifyTokenStatus('error');
      setVerifyTokenError(getVerifyResetPasswordError(err));
      setShowAlt(true);
    }
  }, [token]);

  useEffect(() => {
    executeVerifyTokenStatus();
  }, [executeVerifyTokenStatus, token]);

  const isVerificationError = verifyTokenStatus === 'error';

  const handleSubmit = async ({ password }: SetNewPasswordFormContent) => {
    setSetNewPasswordStatus('loading');
    try {
      await setNewPassword(token, password);
      setSetNewPasswordStatus('success');
      setShowAlt(true);
    } catch (err) {
      setSetNewPasswordStatus('error');
      setSetNewPasswordError(getSetNewPasswordError(err));
    }
  };

  const altContent = (
    <Warning
      error={isVerificationError}
      content={
        isVerificationError
          ? verifyTokenError
          : 'Masz już nowe hasło, spróbuj się nim teraz zalogować!'
      }
    />
  );

  return (
    <AuthTemplate
      title="Nadaj nowe hasło"
      subtitle="Jeśli chodzi o bezpieczeństwo - nie ma co się ograniczać; zaszalej z tym hasłem!"
      illustration={<SecureIllustration />}
      linkLogin
    >
      {showAlt ? (
        altContent
      ) : (
        <Stack spacing={3}>
          <SetNewPasswordForm formId={formId} onSubmit={handleSubmit} />
          <Button variant="contained" form={formId} type="submit">
            Ustaw hasło
          </Button>
          {setNewPasswordStatus === 'error' && <Warning content={setNewPasswordError} />}
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { SetNewPasswordView };
