import { Alert, AlertTitle, Button, Grow, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { WonderIllustration } from 'src/_zswod/assets/illustration_wonder';
import { AuthTemplate } from '../components/AuthTemplate';

const ResetPasswordView: FC = () => {
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
        <Stack spacing={2}>
          <TextField
            label="E-Mail"
            helperText="Na ten adres dostaniesz wiadomość z linkiem do zresetowania hasła"
          />
          <Button variant="contained" onClick={() => setShowAlt(true)}>
            Wyślij E-Mail
          </Button>
        </Stack>
      )}
    </AuthTemplate>
  );
};

export { ResetPasswordView };
