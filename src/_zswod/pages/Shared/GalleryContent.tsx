import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, MouseEventHandler, ReactNode, useState } from 'react';
import Img from 'src/components/Image';
import { LightboxModal } from 'src/_zswod/components';
import { Image } from 'src/_zswod/models/image';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

const ImgStyled = styled(Img)(() => ({
  cursor: 'pointer',
}));

type ImageListItemOverrideProps = {
  tooltip: string;
  icon: ReactNode;
  action: MouseEventHandler<HTMLButtonElement>;
};

const ImageListItemOverride: FC<ImageListItemOverrideProps> = ({ tooltip, icon, action }) => (
  <Tooltip title={tooltip}>
    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} onClick={action}>
      {icon}
    </IconButton>
  </Tooltip>
);

type EditImageDialogProps = {
  imageOpened: number;
  handleClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;

  handleChange: (index: number, title: string, alt: string) => void;

  images: Image[];
};

const EditImageDialog: FC<EditImageDialogProps> = ({
  imageOpened,
  handleClose,
  images,
  handleChange,
}) => {
  const [title, setTitle] = useState(images[imageOpened].title);
  const [alt, setAlt] = useState(images[imageOpened].alt);

  return (
    <Dialog open={imageOpened > -1} onClose={handleClose}>
      <DialogTitle>Edycja</DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2} sx={{ pt: 2 }}>
          <TextField
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
            name={`image-${imageOpened}-title`}
            autoFocus
            label="Krótki tytuł"
            fullWidth
          />
          <TextField
            value={alt}
            required
            onChange={(event) => setAlt(event.target.value)}
            name={`image-${imageOpened}-alt`}
            label="Tekst zastępczy"
            fullWidth
          />
          <Button onClick={() => handleChange(imageOpened, title, alt)}>Ok!</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

type GalleryContentProps = {
  articleTitle: string;
  images: Image[];
  setImages: (images: Image[]) => void;
  hasNextArticle?: boolean;
  hasPrevArticle?: boolean;
  onGoToArticleClick?: MouseEventHandler<HTMLButtonElement>;
  onNewerArticleClick?: MouseEventHandler<HTMLButtonElement>;
  onOlderArticleClick?: MouseEventHandler<HTMLButtonElement>;
};

const GalleryContent: FC<GalleryContentProps> = ({
  articleTitle,
  images,
  setImages,
  hasNextArticle,
  hasPrevArticle,
  onGoToArticleClick,
  onNewerArticleClick,
  onOlderArticleClick,
}) => {
  const [imageOpenForLightbox, setImageOpenForLightbox] = useState(-1);
  const [imageOpenForEdit, setImageOpenForEdit] = useState(-1);

  const handleChange = (index: number, title: string, alt: string) => {
    const image: Image = {
      ...images[index],
      title,
      alt,
    };

    const newImages = images.map((i, _index) => {
      if (index === _index) {
        return image;
      }
      return i;
    });
    setImages(newImages);
    setImageOpenForEdit(-1);
  };

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
          {images.map((img, index) => (
            <ImageListItem key={index}>
              <ImgStyled
                onClick={() => setImageOpenForLightbox(index)}
                src={img.uri}
                alt={img.alt}
              />
              <ImageListItemBar
                title={Boolean(img.title) ? img.title : 'Ten obraz nie został jeszcze opisany'}
                actionIcon={
                  !Boolean(img.title && img.alt) ? (
                    <ImageListItemOverride
                      tooltip="Kliknij aby opisać"
                      icon={<ReportRoundedIcon />}
                      action={() => setImageOpenForEdit(index)}
                    />
                  ) : (
                    <>
                      <ImageListItemOverride
                        tooltip="Kliknij aby pobrać"
                        icon={<DownloadForOfflineRoundedIcon />}
                        action={() => setImageOpenForEdit(index)}
                      />
                      <ImageListItemOverride
                        tooltip="Kliknij aby edytować"
                        icon={<PendingRoundedIcon />}
                        action={() => setImageOpenForEdit(index)}
                      />
                    </>
                  )
                }
              />
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

      {imageOpenForEdit !== -1 && (
        <EditImageDialog
          imageOpened={imageOpenForEdit}
          handleClose={() => setImageOpenForEdit(-1)}
          handleChange={handleChange}
          images={images}
        />
      )}

      <LightboxModal
        images={images.map((i) => i.uri)}
        photoIndex={imageOpenForLightbox!}
        setPhotoIndex={setImageOpenForLightbox}
        isOpen={imageOpenForLightbox !== -1}
        onClose={() => setImageOpenForLightbox(-1)}
      />
    </Box>
  );
};

export { GalleryContent };
