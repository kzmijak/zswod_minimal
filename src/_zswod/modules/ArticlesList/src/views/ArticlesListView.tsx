import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { ArticlesList } from '../components/ArticlesList';
import { FetchArticleHeaders } from '../components/FetchArticleHeaders';

const ArticlesListView: FC = () => (
  <>
    <FetchArticleHeaders />
    <Page title="Nowości">
      <ArticlesList />
    </Page>
  </>
);

export { ArticlesListView };
