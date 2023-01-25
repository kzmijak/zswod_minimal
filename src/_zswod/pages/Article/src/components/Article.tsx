import { Container } from '@mui/material';
import { FC } from 'react';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleContent } from './ArticleContent';

const Article: FC = () => {
  const {
    article: { content, title },
    images,
  } = useCurrentArticle();

  return (
    <Container>
      <ArticleContent content={content} title={title} previewBlobId={images[0].blobId} />
    </Container>
  );
};

export { Article };
