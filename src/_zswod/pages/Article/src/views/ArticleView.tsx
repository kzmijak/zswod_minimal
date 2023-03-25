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
import { PATH_DASHBOARD } from 'src/_zswod/routes/src/paths';
import { ArticleContent } from '../components/ArticleContent';

const ArticleView: FC = () => {
  const { title: titleNormalized } = useParams();
  const { status } = useArticle(titleNormalized);

  const { content, title } = useSelector(selectCurrentArticle);
  const previewBlob = useSelector(selectCurrentArticlePreview);

  if (!Boolean(titleNormalized) || status === 'error')
    return <Navigate to={PATH_DASHBOARD.articles} />;

  return (
    <>
      <Page title="Nowości">
        <Container>
          <ArticleContent content={content} title={title} previewImageUrl={previewBlob?.src} />
        </Container>
      </Page>
    </>
  );
};

export { ArticleView };
