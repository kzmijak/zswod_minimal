import { FC } from 'react';
import { useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { CurrentArticleProvider } from 'src/_zswod/modules/CurrentArticle';
import { Creator } from '../components/Creator';

const ArticleCreatorView: FC = () => {
  const { articleTitle } = useParams();

  return (
    <Page title="Edytor">
      <CurrentArticleProvider titleNormalized={articleTitle}>
        <Creator />
      </CurrentArticleProvider>
    </Page>
  );
};

export { ArticleCreatorView };
