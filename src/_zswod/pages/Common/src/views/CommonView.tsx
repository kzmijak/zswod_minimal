import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { DashboardDesktop } from '../components/DashboardDesktop';

const CommonView: FC = () => (
  <Page title="E-Panel">
    <DashboardDesktop />
  </Page>
);

export { CommonView };
