import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { ArticlesList } from '../components/ArticlesList';

const ArticlesListView: FC = () => (
  <>
    <FetchArticleHeaders />
    <Page title="Nowości">
      <ArticlesList />
    </Page>
  </>
);

export { ArticlesListView };
