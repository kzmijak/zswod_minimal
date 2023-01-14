import { Alert, AlertTitle, Button, Grow, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { SecureIllustration } from 'src/_zswod/assets/illustration_secure';
import { AuthTemplate } from '../components/AuthTemplate';
import { SetNewPasswordForm } from '../components/SetNewPasswordForm';

const SetNewPasswordView: FC = () => {
  const formId = 'set-new-password';
  const [showAlt, setShowAlt] = useState(false);

  const altContent = (
    <Grow in>
      <Alert>
        <AlertTitle>Udało się!</AlertTitle>
        Masz już nowe hasło, spróbuj się nim teraz zalogować!
      </Alert>
    </Grow>
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
        <Stack spacing={2}>
          <SetNewPasswordForm
            formId={formId}
            onSubmit={() => {
              setShowAlt(true);
            }}
          />
          <Button variant="contained" form={formId} type="submit">
            Ustaw hasło
          </Button>
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { SetNewPasswordView };
