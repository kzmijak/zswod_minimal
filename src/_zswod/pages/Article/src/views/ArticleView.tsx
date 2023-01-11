import { FC, useMemo } from 'react';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { CurrentArticleProvider } from 'src/_zswod/modules/CurrentArticle';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Article } from '../components/Article';

const ArticleView: FC = () => {
  const { title: titleNormalized } = useParams();

  const galleryUrl = useMemo(() => PATHS_ABOUT.galeria.link + titleNormalized, [titleNormalized]);

  if (!Boolean(titleNormalized)) return <Navigate to={PATHS_ABOUT.nowosci.link} />;

  return (
    <>
      <Page title="Nowości">
        <CurrentArticleProvider titleNormalized={titleNormalized!}>
          <Article galleryUrl={galleryUrl} />
        </CurrentArticleProvider>
      </Page>
    </>
  );
};

export { ArticleView };
