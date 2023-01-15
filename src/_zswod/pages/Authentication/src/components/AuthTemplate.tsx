import { Grid, Stack, Typography, Box, Grow } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Page } from 'src/_zswod/components/Page';
import { useRwd } from 'src/_zswod/utils/useRwd';

type LinkBaseProps = {
  header: string;
  callToAction: string;
  url: string;
};

const LinkBase: FC<LinkBaseProps> = ({ callToAction, header, url }) => (
  <Typography component={Stack} direction="row" alignItems="center">
    {header}&nbsp;
    <Typography component={Link} to={url} color="primary" sx={{ textDecoration: 'none' }}>
      {callToAction}
    </Typography>
  </Typography>
);

type AuthTemplateProps = {
  children: ReactNode;
  linkLogin?: boolean;
  linkRegister?: boolean;
  linkResetPassword?: boolean;
  illustration?: ReactNode;
  title: string;
  subtitle?: string;
};

const AuthTemplate: FC<AuthTemplateProps> = ({
  children,
  title,
  illustration,
  linkLogin,
  linkRegister,
  linkResetPassword,
  subtitle,
}) => {
  const { isMobile } = useRwd();

  return (
    <Page title={title}>
      <Grid container direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={isMobile ? 3 : 6}>
          <Stack minHeight={1} justifyContent="center">
            <Grow in>
              <Box sx={{ width: isMobile ? '100%' : 430, minHeight: 350, padding: 5 }}>
                {illustration}
              </Box>
            </Grow>
          </Stack>
        </Grid>
        <Grid
          xs={isMobile ? 9 : 6}
          item
          container
          component={Stack}
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={3}
        >
          <Stack spacing={3} minWidth={1}>
            <Stack>
              <Typography variant="h3">{title} </Typography>
              <Typography>{subtitle} </Typography>
            </Stack>
            <Stack>{children}</Stack>
            <Stack>
              {linkLogin && (
                <LinkBase
                  header="Masz już konto?"
                  callToAction="Zaloguj się!"
                  url="/konto/logowanie"
                />
              )}
              {linkRegister && (
                <LinkBase
                  header="Nie masz jeszcze konta?"
                  callToAction="Zarejestruj się!"
                  url="/konto/rejestracja"
                />
              )}
              {linkResetPassword && (
                <LinkBase
                  header="Nie pamiętasz hasła?"
                  callToAction="Zresetuj je!"
                  url="/konto/resetowanie-hasla"
                />
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
};

export { AuthTemplate };
