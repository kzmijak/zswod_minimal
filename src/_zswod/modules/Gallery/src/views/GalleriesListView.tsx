import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { FetchImages } from 'src/_zswod/modules/Images';
import { GalleriesList } from '../components/GalleriesList';

const GalleriesListView: FC = () => (
  <Page>
    <FetchImages />
    <GalleriesList />
  </Page>
);

export { GalleriesListView };
