import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { DashboardDesktop } from '../components/DashboardDesktop';
import { Container, Stack } from '@mui/material';
import { FetchCustomPageHeaders } from 'src/_zswod/modules/CustomPageHeaders';

const CommonView: FC = () => (
  <>
    <FetchCustomPageHeaders />
    <Page title="E-Panel">
      <Container sx={{ height: '100vh' }}>
        <Stack height="100%" justifyContent="center">
          <DashboardDesktop />
        </Stack>
      </Container>
    </Page>
  </>
);

export { CommonView };
