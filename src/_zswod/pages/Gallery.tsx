import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Page } from '../components';

const Gallery: FC = () => (
  <Page title="Artykuły">
    <Container maxWidth="xl">
      <Typography>Hello there</Typography>
    </Container>
  </Page>
);

export { Gallery };
