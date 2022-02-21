import { Container } from '@mui/material';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import Page from 'src/_zswod/components/Page';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { getNeighboringArticles } from 'src/_zswod/redux/article/selectors';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Article } from 'src/_zswod/models/Article/article';
import { GalleryContent } from '../../Shared/GalleryContent';

const GalleryMobilesGuarded: FC = () => {
  const { articleId } = useParams();
  const { getArticle } = useArticlesContext();

  if (isNaN(Number(articleId))) return <Page404 />;

  const article = getArticle(Number(articleId));

  if (article === undefined) return <Page404 />;

  return <GalleryMobile article={article} />;
};

const GalleryMobile: FC<{ article: Article }> = ({ article }) => {
  const { getArticleGallery } = useArticlesContext();
  const { newerArticle, olderArticle } = useSelector(getNeighboringArticles(article));
  const navigate = useNavigate();
  const next = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${newerArticle?.id}`);
  };
  const prev = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${olderArticle?.id}`);
  };

  const goToArticle = () => {
    navigate(`${PATHS_ABOUT.Nowości}/${article.id}`);
  };

  const [images, setImages] = useState(getArticleGallery(article.id));
  return (
    <Page>
      <Container>
        <GalleryContent
          setImages={setImages}
          articleTitle={article.title}
          images={images}
          hasNextArticle={Boolean(newerArticle)}
          hasPrevArticle={Boolean(olderArticle)}
          onGoToArticleClick={() => goToArticle()}
          onNewerArticleClick={() => next()}
          onOlderArticleClick={() => prev()}
        />
      </Container>
    </Page>
  );
};

export { GalleryMobilesGuarded as GalleryMobile };
