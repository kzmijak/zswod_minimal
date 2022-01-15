import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
//
import MainHeader from './MainHeader';
import MainFooter from 'src/layouts/main/MainFooter';
import Logo from 'src/components/Logo';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />

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
}
