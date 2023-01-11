import { Container } from '@mui/material';
import { FC } from 'react';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { CurrentArticleProvider, useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { GalleryContent } from '../components/GalleryContent';

const Gallery: FC = () => {
  const { article, images } = useCurrentArticle();

  return (
    <Container>
      <GalleryContent {...article} images={images} />
    </Container>
  );
};

const GalleryView: FC = () => {
  const { articleTitle } = useParams();

  if (!Boolean(articleTitle)) return <Navigate to={PATHS_ABOUT.galeria.link} />;

  return (
    <Page title="Galeria">
      <CurrentArticleProvider titleNormalized={articleTitle!}>
        <Gallery />
      </CurrentArticleProvider>
    </Page>
  );
};

export { GalleryView };
