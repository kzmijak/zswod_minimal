
import { Container } from '@mui/material';
import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import Page from 'src/_old_zswod/components/Page';
import { PATHS_ABOUT } from 'src/_old_zswod/routes/src/menu.paths';
import { GalleryContent } from '../../Shared/GalleryContent';
import { useGalleryActions } from 'src/_old_zswod/redux/gallery/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, getCurrentGallery } from 'src/_old_zswod/redux/gallery/selectors';
import { useArticlesContext } from 'src/_old_zswod/hooks/useArticlesContext';

const GalleryMobilesGuarded: FC = () => {
  const { articleId } = useParams();

  if (isNaN(Number(articleId))) return <Page404 />;

  return <GalleryMobile articleId={Number(articleId)} />;
};

const GalleryMobile: FC<{ articleId: number }> = ({ articleId }) => {
  const { asyncGetArticleAction } = useGalleryActions();
  const article = useSelector(getCurrentGallery);
  const articles = useSelector(getArticles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    selectors: { getNeighboringArticles },
  } = useArticlesContext();

  useEffect(() => {
    if (article?.id !== articleId) {
      dispatch(asyncGetArticleAction(articleId));
    }
  }, [articleId, article]);

  if (!Boolean(article)) return null;
  const { newerArticle, olderArticle } = getNeighboringArticles(article!, articles!);

  const next = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${newerArticle?.id}`);
  };
  const prev = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${olderArticle?.id}`);
  };

  const goToArticle = () => {
    navigate(`${PATHS_ABOUT.Nowości}/${article!.id}`);
  };

  return (
    <Page>
      <Container>
        <GalleryContent
          articleTitle={article!.title}
          images={article!.images}
          setImages={() => {}}
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
