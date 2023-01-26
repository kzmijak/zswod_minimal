import { Container } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import {
  selectCurrentArticle,
  selectCurrentArticleImages,
  useArticle,
} from 'src/_zswod/modules/CurrentArticle';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { GalleryContent } from '../components/GalleryContent';

const GalleryView: FC = () => {
  const { articleTitle } = useParams();
  const { status } = useArticle(articleTitle);

  const article = useSelector(selectCurrentArticle);
  const images = useSelector(selectCurrentArticleImages);

  if (!Boolean(articleTitle) || status === 'error')
    return <Navigate to={PATHS_ABOUT.galeria.link} />;

  return (
    <Page title="Galeria">
      <Container>
        <GalleryContent {...article} images={images} />
      </Container>
    </Page>
  );
};

export { GalleryView };
