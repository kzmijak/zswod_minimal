import { Container, Paper, Stack } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router';

const AuthLayout: FC = () => (
  <Container maxWidth="sm">
    <Stack height="100vh" justifyContent="center">
      <Paper elevation={16} sx={{ p: 3 }}>
        <Outlet />
      </Paper>
    </Stack>
  </Container>
);

export { AuthLayout };
