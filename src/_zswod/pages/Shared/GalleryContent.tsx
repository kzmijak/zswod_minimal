import { Box, Button, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import Img from 'src/components/Image';
import { LightboxModal } from 'src/_zswod/components';
import { Image } from 'src/_zswod/models/image';

type GalleryContentProps = {
  articleTitle: string;
  images?: Image[];
  previews?: string[];
  hasNextArticle?: boolean;
  hasPrevArticle?: boolean;
  onGoToArticleClick?: MouseEventHandler<HTMLButtonElement>;
  onNewerArticleClick?: MouseEventHandler<HTMLButtonElement>;
  onOlderArticleClick?: MouseEventHandler<HTMLButtonElement>;
};

const GalleryContent: FC<GalleryContentProps> = ({
  articleTitle,
  images,
  previews,
  hasNextArticle,
  hasPrevArticle,
  onGoToArticleClick,
  onNewerArticleClick,
  onOlderArticleClick,
}) => {
  const [imageOpen, setImageOpen] = useState(-1);

  if (!images && !previews) return <>Invalid input</>;

  return (
    <Box>
      <Stack direction="column" spacing={5}>
        <Typography variant="h1">{articleTitle}</Typography>
        <Stack direction="row" justifyContent="center">
          <Button onClick={onGoToArticleClick} variant="contained">
            Zobacz artykuł
          </Button>
        </Stack>
        <ImageList>
          {images
            ? images.map((img, index) => (
                <ImageListItem key={img.id}>
                  <Img onClick={() => setImageOpen(index)} src={img.uri} alt={img.alt} />
                </ImageListItem>
              ))
            : previews!.map((url, index) => (
                <ImageListItem key={index}>
                  <Img onClick={() => setImageOpen(index)} src={url} alt={url} />
                </ImageListItem>
              ))}
        </ImageList>

        <Stack direction={'row'} justifyContent={'space-between'}>
          <Button
            variant="outlined"
            onClick={onNewerArticleClick}
            sx={{ visibility: hasNextArticle ? 'visible' : 'hidden' }}
          >
            Nowsza galeria
          </Button>
          <Button
            variant="outlined"
            onClick={onOlderArticleClick}
            sx={{ visibility: hasPrevArticle ? 'visible' : 'hidden' }}
          >
            Wcześniejsza galeria
          </Button>
        </Stack>
      </Stack>

      <LightboxModal
        images={images ? images.map((i) => i.uri) : previews!}
        photoIndex={imageOpen!}
        setPhotoIndex={setImageOpen}
        isOpen={imageOpen !== -1}
        onClose={() => setImageOpen(-1)}
      />
    </Box>
  );
};

export { GalleryContent };
