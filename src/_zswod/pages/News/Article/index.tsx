import { Container } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Page } from 'src/_zswod/components';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { Article } from 'src/_zswod/models/Article/article';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { ArticleContent } from '../ArticleContent';

const ArticleGuarded: FC = () => {
  const { articleId } = useParams();
  const { getArticle } = useArticlesContext();

  if (isNaN(Number(articleId))) return <Page404 />;

  const article = getArticle(Number(articleId));

  if (article === undefined) return <Page404 />;

  return <ArticleView article={article} />;
};

const ArticleView: FC<{ article: Article }> = ({ article }) => {
  const { getArticlePrimaryImage } = useArticlesContext();
  const mainImage = getArticlePrimaryImage(article.id);
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <ArticleContent
          articleContent={article}
          mainImage={mainImage.uri}
          onGoToGallery={() => navigate(`${PATHS_ABOUT.Galeria}/${article.id}`)}
        />
      </Container>
    </Page>
  );
};

export { ArticleGuarded as NewsArticle };
