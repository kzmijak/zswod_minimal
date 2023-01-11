import { Container } from '@mui/material';
import { FC } from 'react';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleContent } from './ArticleContent';

type ArticleProps = {
  galleryUrl: string;
};

const Article: FC<ArticleProps> = ({ galleryUrl }) => {
  const { article, images } = useCurrentArticle();

  return (
    <Container>
      <ArticleContent
        articleContent={article}
        galleryUrl={galleryUrl}
        previewImageUrl={images[0].url}
      />
    </Container>
  );
};

export { Article };
