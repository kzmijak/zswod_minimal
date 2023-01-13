import { Grid, Stack, Typography, Box, Grow } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useRwd } from 'src/_zswod/utils/useRwd';
import { LinkLogin } from './common/LinkLogin';
import { LinkRegister } from './common/LinkRegister';
import { LinkResetPassword } from './common/LinkResetPassword';

type AuthLayoutProps = {
  children: ReactNode;
  linkLogin?: boolean;
  linkRegister?: boolean;
  linkResetPassword?: boolean;
  illustration?: ReactNode;
  title: string;
  subtitle?: string;
};

const AuthLayout: FC<AuthLayoutProps> = ({
  children,
  title,
  illustration,
  linkLogin,
  linkRegister,
  linkResetPassword,
  subtitle,
}) => {
  const { isDesktop } = useRwd();

  return (
    <Grid container direction={isDesktop ? 'row' : 'column'}>
      <Grid item xs={isDesktop ? 6 : 3}>
        <Stack minHeight={1} justifyContent="center">
          <Grow in>
            <Box sx={{ width: isDesktop ? 430 : '100%', minHeight: 350, padding: 5 }}>
              {illustration}
            </Box>
          </Grow>
        </Stack>
      </Grid>
      <Grid
        xs={isDesktop ? 6 : 9}
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
            {linkLogin && <LinkLogin />}
            {linkRegister && <LinkRegister />}
            {linkResetPassword && <LinkResetPassword />}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { AuthLayout };
