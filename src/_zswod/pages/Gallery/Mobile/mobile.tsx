import { Button, Container, Fab, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Image from 'src/components/Image';
import Page404 from 'src/pages/Page404';
import { LightboxModal } from 'src/_zswod/components';
import Page from 'src/_zswod/components/Page';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { getNeighboringArticles } from 'src/_zswod/redux/article/selectors';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Article } from 'src/_zswod/utils/Mock/articles';

const GalleryMobilesGuarded: FC = () => {
  const { articleId } = useParams();
  const { getArticle } = useArticlesContext();

  if (isNaN(Number(articleId))) return <Page404 />;

  const article = getArticle(Number(articleId));

  if (article === undefined) return <Page404 />;

  return <GalleryMobile article={article} />;
};

const GalleryMobile: FC<{ article: Article }> = ({ article }) => {
  const [imageOpen, setImageOpen] = useState(-1);
  const { getArticleGallery } = useArticlesContext();
  const { newerArticle, olderArticle } = useSelector(getNeighboringArticles(article));
  const navigate = useNavigate();
  const next = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${newerArticle?.id}`);
  };
  const prev = () => {
    navigate(`${PATHS_ABOUT.Galeria}/${olderArticle?.id}`);
  };

  const images = getArticleGallery(article.id);
  return (
    <Page>
      <Container>
        <Stack direction="column" spacing={5}>
          <Typography variant="h1">{article!.title}</Typography>
          <Stack direction="row" justifyContent="center">
            <Button variant="contained">Zobacz artykuł</Button>
          </Stack>
          <ImageList>
            {images.map((img, index) => (
              <ImageListItem key={img.index}>
                <Image onClick={() => setImageOpen(index)} src={img.uri} alt={img.alt} />
              </ImageListItem>
            ))}
          </ImageList>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Button
              variant="outlined"
              onClick={next}
              sx={{ visibility: newerArticle ? 'visible' : 'hidden' }}
            >
              Nowsza galeria
            </Button>
            <Button
              variant="outlined"
              onClick={prev}
              sx={{ visibility: olderArticle ? 'visible' : 'hidden' }}
            >
              Wcześniejsza galeria
            </Button>
          </Stack>
        </Stack>

        <LightboxModal
          images={images.map((i) => i.uri)}
          photoIndex={imageOpen!}
          setPhotoIndex={setImageOpen}
          isOpen={imageOpen !== -1}
          onClose={() => setImageOpen(-1)}
        />
      </Container>
    </Page>
  );
};

export { GalleryMobilesGuarded as GalleryMobile };
