import { Image } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { ArticleModel } from 'src/_zswod/models/Article';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { ImageModel } from 'src/_zswod/models/Image';
import { Link } from 'react-router-dom';

type ImageListItemOverrideProps = {
  tooltip: string;
  icon: ReactNode;
  action?: MouseEventHandler<HTMLButtonElement>;
};

const ImageListItemOverride: FC<ImageListItemOverrideProps> = ({ tooltip, icon, action }) => (
  <Tooltip title={tooltip}>
    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} onClick={action}>
      {icon}
    </IconButton>
  </Tooltip>
);

const FillActionButton: FC = () => (
  <ImageListItemOverride tooltip="Kliknij aby opisać" icon={<ReportRoundedIcon />} />
);

const DownloadActionButton: FC = () => (
  <ImageListItemOverride tooltip="Kliknij aby pobrać" icon={<DownloadForOfflineRoundedIcon />} />
);

const EditActionButton: FC = () => (
  <ImageListItemOverride tooltip="Kliknij aby edytować" icon={<PendingRoundedIcon />} />
);

type GalleryContentProps = Pick<ArticleModel, 'id' | 'title' | 'uploadDate'> & {
  images: ImageModel[];
  articleUrl?: string;
  nextGalleryUrl?: string;
  prevGalleryUrl?: string;
};

const GalleryContent: FC<GalleryContentProps> = ({
  title,
  uploadDate,
  articleUrl,
  nextGalleryUrl,
  prevGalleryUrl,
  images,
}) => {
  const hasArticle = Boolean(articleUrl);
  const hasNextGallery = Boolean(nextGalleryUrl);
  const hasPrevGallery = Boolean(prevGalleryUrl);

  return (
    <Box>
      <Stack direction="column" spacing={5}>
        <Typography variant="h1">{title}</Typography>
        <Stack direction="row" justifyContent="center">
          {hasArticle && (
            <Button component={Link} to={articleUrl!} variant="contained">
              Zobacz artykuł
            </Button>
          )}
        </Stack>
        <ImageList>
          {images.map((img, index) => {
            const { alt, title, url } = img;
            const isTitleFilled = Boolean(title);
            const isAltFilled = Boolean(alt);
            const isImageFilled = isTitleFilled && isAltFilled;
            const actions = isImageFilled ? (
              <FillActionButton />
            ) : (
              <>
                <EditActionButton />
                <DownloadActionButton />
              </>
            );

            return (
              <ImageListItem key={index}>
                <Image component={'img'} src={url} alt={alt} sx={{ cursor: 'pointer' }} />
                <ImageListItemBar
                  title={isTitleFilled ? title : 'Ten obraz nie został jeszcze opisany'}
                  actionIcon={actions}
                />
              </ImageListItem>
            );
          })}
        </ImageList>

        <Stack direction={'row'} justifyContent={'space-between'}>
          {hasNextGallery && (
            <Button variant="outlined" component={Link} to={nextGalleryUrl!}>
              Nowsza galeria
            </Button>
          )}

          {hasPrevGallery && (
            <Button variant="outlined" component={Link} to={prevGalleryUrl!}>
              Wcześniejsza galeria
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { GalleryContent };
