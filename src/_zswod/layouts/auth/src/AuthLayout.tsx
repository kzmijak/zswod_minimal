import { Container, Stack } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router';

const AuthLayout: FC = () => (
  <Container>
    <Stack minHeight="100vh" justifyContent="center">
      <Outlet />
    </Stack>
  </Container>
);

export { AuthLayout };
