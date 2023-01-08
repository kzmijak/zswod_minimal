import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticle } from 'src/_zswod/modules/Article';
import { selectCurrentArticle } from 'src/_zswod/modules/Article/src/slice/selectors';
import { FetchImages, selectArticleImages } from 'src/_zswod/modules/Images';
import { Creator } from '../components/Creator';

const ArticleCreatorView: FC = () => {
  const { articleTitle } = useParams();
  const currentArticle = useSelector(selectCurrentArticle);
  const images = useSelector(selectArticleImages(currentArticle.id));

  const isEditMode = Boolean(articleTitle);

  const content = <Creator articleInitialState={currentArticle} imageInitialStates={images} />;

  return (
    <Page title="Edytor">
      {isEditMode ? (
        <FetchArticle articleTitle={articleTitle!}>
          <FetchImages>{content}</FetchImages>
        </FetchArticle>
      ) : (
        content
      )}
    </Page>
  );
};

export { ArticleCreatorView };