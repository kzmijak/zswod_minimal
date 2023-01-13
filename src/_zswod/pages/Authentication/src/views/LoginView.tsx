import { LoadingButton } from '@mui/lab';
import { Alert, Grid, Grow, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { LogicIllustration } from 'src/_zswod/assets/illustration_logic';
import { api } from 'src/_zswod/modules/Axios';
import { useJwt } from 'src/_zswod/modules/User';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { useRwd } from 'src/_zswod/utils/useRwd';
import { LinkRegister } from '../components/common/LinkRegister';
import { LinkResetPassword } from '../components/common/LinkResetPassword';
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

  const { isDesktop } = useRwd();

  return (
    <Grid container>
      <Grid item xs={isDesktop ? 6 : 12}>
        <LogicIllustration sx={{ width: isDesktop ? 430 : '100%', padding: 5 }} />
      </Grid>
      <Grid
        xs={isDesktop ? 6 : 12}
        item
        container
        component={Stack}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={3} minWidth={1}>
          <Stack>
            <Typography variant="h3">Zaloguj się</Typography>
            <Typography>Ponieważ fajnie jest być sobą! 🤠</Typography>
          </Stack>
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
          <Stack>
            <LinkRegister />
            <LinkResetPassword />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { LoginView };
