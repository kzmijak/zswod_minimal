import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { nullArticleObject } from 'src/_zswod/models/Article';
import {
  selectCurrentArticle,
  selectCurrentArticleImages,
  useArticle,
} from 'src/_zswod/modules/CurrentArticle';
import { Creator } from '../components/Creator';

const ArticleCreatorView: FC = () => {
  const { titleNormalized } = useParams();
  const { status } = useArticle(titleNormalized);

  const currentArticle = useSelector(selectCurrentArticle);
  const currentArticleImages = useSelector(selectCurrentArticleImages);

  if (status === 'loading') {
    return null;
  }

  const isCorrectArticle = currentArticle.titleNormalized === titleNormalized;

  const article = isCorrectArticle ? currentArticle : nullArticleObject;
  const images = isCorrectArticle ? currentArticleImages : [];

  return (
    <Page title="Edytor">
      <Creator titleNormalized={titleNormalized} article={article} images={images} />
    </Page>
  );
};

export { ArticleCreatorView };
