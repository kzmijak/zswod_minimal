import { Container } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Page } from 'src/_old_zswod/components';
import { useNewsActions } from 'src/_old_zswod/redux/news/actions';
import { getCurrentArticle } from 'src/_old_zswod/redux/news/selectors';
import { PATHS_ABOUT } from 'src/_old_zswod/routes/src/menu.paths';
import { ArticleContent } from '../ArticleContent';

const ArticleGuarded: FC = () => {
  const { articleId } = useParams();

  if (isNaN(Number(articleId))) return <Page404 />;

  return <ArticleView articleId={Number(articleId)} />;
};

const ArticleView: FC<{ articleId: number }> = ({ articleId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { asyncGetArticleAction } = useNewsActions();
  const article = useSelector(getCurrentArticle);

  useEffect(() => {
    if (article?.id !== articleId) {
      dispatch(asyncGetArticleAction(articleId));
    }
  }, [articleId, article]);

  if (!Boolean(article)) {
    return null;
  }

  return (
    <Page>
      <Container>
        <ArticleContent
          articleContent={article!}
          mainImage={article!.images[0].uri}
          onGoToGallery={() => navigate(`${PATHS_ABOUT.Galeria}/${article!.id}`)}
        />
      </Container>
    </Page>
  );
};

export { ArticleGuarded as NewsArticle };
