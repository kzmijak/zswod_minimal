import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { Landing } from '../components/Landing';

const LandingView: FC = () => (
  <>
    <FetchArticleHeaders />
    <Page title="Szkoła Podstawowa Orłów">
      <Landing />
    </Page>
  </>
);

export { LandingView };
