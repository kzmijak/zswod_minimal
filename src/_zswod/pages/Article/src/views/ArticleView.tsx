import { FC } from 'react';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { CurrentArticleProvider } from 'src/_zswod/modules/CurrentArticle';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Article } from '../components/Article';

const ArticleView: FC = () => {
  const { title: titleNormalized } = useParams();

  if (!Boolean(titleNormalized)) return <Navigate to={PATHS_ABOUT.nowosci.link} />;

  return (
    <>
      <Page title="Nowości">
        <CurrentArticleProvider titleNormalized={titleNormalized!}>
          <Article />
        </CurrentArticleProvider>
      </Page>
    </>
  );
};

export { ArticleView };
