import { Alert, AlertTitle, Button, Grow, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { WonderIllustration } from 'src/_zswod/assets/illustration_wonder';
import { AuthTemplate } from '../components/AuthTemplate';
import { ResetPasswordForm } from '../components/ResetPasswordForm';

const ResetPasswordView: FC = () => {
  const formId = 'reset-password';
  const [showAlt, setShowAlt] = useState(false);

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
      {showAlt ? (
        altContent
      ) : (
        <Stack spacing={3}>
          <ResetPasswordForm
            formId={formId}
            onSubmit={() => {
              setShowAlt(true);
            }}
          />
          <Button variant="contained" type="submit" form={formId}>
            Wyślij E-Mail
          </Button>
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { ResetPasswordView };
