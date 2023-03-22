import { useLocation, Outlet } from 'react-router-dom';
import { Box, Link, Container, Typography, Stack } from '@mui/material';
import { MainHeader } from './MainHeader';
import { Logo } from 'src/_zswod/components/Logo';
import { FC } from 'react';

const MainLayout: FC = () => {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {isHome && (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto', width: 120, height: 120 }} />

            <Typography variant="caption" component="p">
              © Wszystkie prawa zastrzeżone
              <br /> Projekt strony: &nbsp;
              <Link href="https://www.linkedin.com/in/kacper-%C5%BCmijak-602551195/">
                Kacper Żmijak
              </Link>
            </Typography>
          </Container>
        </Box>
      )}
    </Stack>
  );
};

export { MainLayout };
