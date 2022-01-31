import { Box, Button, Card, CardContent, Container, Paper, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Page } from 'src/_zswod/components';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { Article } from 'src/_zswod/utils/Mock/articles';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Link } from 'react-router-dom';
import { EditorState } from 'draft-js';
import { DraftEditor } from 'src/_zswod/components/editor';
import Markdown from 'src/_zswod/components/Markdown';

const ImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

type ArticleImageProps = {
  title: string;
  image: string;
  link: string;
};

function ArticleImage({ image, title, link }: ArticleImageProps) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' },
      }}
    >
      <ImgStyle alt={title} src={image} />
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            0
          )} 100%)`,
        }}
      />
      <CardContent
        sx={{
          bottom: 0,
          width: '100%',
          maxWidth: 480,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Button
          component={Link}
          variant="contained"
          to={link}
          sx={{ position: 'relative', left: 0 }}
        >
          Zobacz galerię
        </Button>
      </CardContent>
    </Paper>
  );
}

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

  return (
    <Page>
      <Container>
        <Card>
          <ArticleImage
            title={article.title}
            image={mainImage.uri}
            link={`${PATHS_ABOUT.Galeria}/${article.id}`}
          />
          <Typography sx={{ wordWrap: 'break-word' }}>
            <Markdown children={article.content} />
          </Typography>
        </Card>
      </Container>
    </Page>
  );
};

export { ArticleGuarded as NewsArticle };
