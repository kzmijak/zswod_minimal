import { Container } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { nullArticleObject } from 'src/_zswod/models/Article';
import {
  currentArticleGallery,
  selectCurrentArticle,
  selectCurrentArticlePreview,
  useArticle,
} from 'src/_zswod/modules/CurrentArticle';
import { GalleryViewer } from 'src/_zswod/modules/GalleryViewer';
import { PATH_DASHBOARD } from 'src/_zswod/routes/src/paths';
import { ArticleContent } from '../components/ArticleContent';

const ArticleView: FC = () => {
  const { titleNormalized } = useParams();
  const { status } = useArticle(titleNormalized);

  const currentArticle = useSelector(selectCurrentArticle);
  const previewImage = useSelector(selectCurrentArticlePreview);
  const gallery = useSelector(currentArticleGallery);

  if (!Boolean(titleNormalized) || status === 'error')
    return <Navigate to={PATH_DASHBOARD.articles} />;

  const { content, title, id } = status === 'loading' ? nullArticleObject : currentArticle;

  return (
    <>
      <Page title="Nowości">
        <Container>
          <ArticleContent
            showToolbar
            titleNormalized={titleNormalized}
            id={id}
            content={content}
            title={title}
            previewImageUrl={previewImage?.src}
          />
          <GalleryViewer gallery={gallery} />
        </Container>
      </Page>
    </>
  );
};

export { ArticleView };
