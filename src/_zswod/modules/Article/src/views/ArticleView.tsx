import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { ArticleContent } from '../components/ArticleContent';
import { FetchArticle } from '../components/FetchArticle';
import { selectCurrentArticle } from '../slice/selectors';

const ArticleView: FC = () => {
  const { title: titleNormalized } = useParams();
  const navigate = useNavigate();
  const article = useSelector(selectCurrentArticle);

  const handleGoToGalleryClick = () => navigate(`${PATHS_ABOUT.galeria}/${titleNormalized}`);

  if (!Boolean(titleNormalized)) navigate(PATHS_ABOUT.nowosci.link);

  return (
    <>
      <FetchArticle articleTitle={titleNormalized!} />
      <Page title="Nowości">
        <ArticleContent articleContent={article} onGoToGallery={handleGoToGalleryClick} />
      </Page>
    </>
  );
};

export { ArticleView };
