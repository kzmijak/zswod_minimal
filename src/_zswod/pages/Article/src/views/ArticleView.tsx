import { Container } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import {
  selectCurrentArticle,
  selectCurrentArticlePreview,
  useArticle,
} from 'src/_zswod/modules/CurrentArticle';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { ArticleContent } from '../components/ArticleContent';

const ArticleView: FC = () => {
  const { title: titleNormalized } = useParams();
  const { status } = useArticle(titleNormalized);

  const { content, title } = useSelector(selectCurrentArticle);
  const previewBlob = useSelector(selectCurrentArticlePreview);

  if (!Boolean(titleNormalized) || status === 'error')
    return <Navigate to={PATHS_ABOUT.nowosci.link} />;

  return (
    <>
      <Page title="Nowości">
        <Container>
          <ArticleContent content={content} title={title} previewBlobId={previewBlob?.blobId} />
        </Container>
      </Page>
    </>
  );
};

export { ArticleView };
