import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticleHeaders } from 'src/_zswod/modules/ArticlesList';
import { FetchImages } from 'src/_zswod/modules/Images';
import { Landing } from '../components/Landing';

const LandingView: FC = () => (
  <>
    <FetchArticleHeaders />
    <FetchImages />
    <Page title="Szkoła Podstawowa Orłów">
      <Landing />
    </Page>
  </>
);

export { LandingView };
