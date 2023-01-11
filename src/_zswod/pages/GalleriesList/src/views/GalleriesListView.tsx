import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { GalleriesList } from '../components/GalleriesList';

const GalleriesListView: FC = () => (
  <Page title="Galerie">
    <FetchArticleHeaders />
    <GalleriesList />
  </Page>
);

export { GalleriesListView };
