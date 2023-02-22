import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import {
  selectCurrentArticle,
  selectCurrentArticleImages,
  useArticle,
} from 'src/_zswod/modules/CurrentArticle';
import { Creator } from '../components/Creator';

const ArticleCreatorView: FC = () => {
  const { articleTitle } = useParams();
  const { status } = useArticle(articleTitle);

  const article = useSelector(selectCurrentArticle);
  const images = useSelector(selectCurrentArticleImages);

  if (status === 'loading') {
    return null;
  }

  return (
    <Page title="Edytor">
      <Creator titleNormalized={articleTitle} article={article} images={images} />
    </Page>
  );
};

export { ArticleCreatorView };
