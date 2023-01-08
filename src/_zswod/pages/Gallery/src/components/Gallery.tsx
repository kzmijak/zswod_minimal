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
import { useSelector } from 'react-redux';
import { ArticleModel } from 'src/_zswod/models/Article';
import { selectArticleImages } from 'src/_zswod/modules/Images';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

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

type GalleryProps = {
  articleMeta: Pick<ArticleModel, 'id' | 'title' | 'date'>;
  onOpenArticleClick?: () => void;
  onOpenNextGalleryClick?: () => void;
  onOpenPrevGalleryClick?: () => void;
};

const Gallery: FC<GalleryProps> = ({
  articleMeta,
  onOpenArticleClick,
  onOpenNextGalleryClick,
  onOpenPrevGalleryClick,
}) => {
  const { id, title: articleTitle, date } = articleMeta;
  const images = useSelector(selectArticleImages(id));

  const hasArticle = Boolean(onOpenArticleClick);
  const hasNextGallery = Boolean(onOpenNextGalleryClick);
  const hasPrevGallery = Boolean(onOpenPrevGalleryClick);

  return (
    <Box>
      <Stack direction="column" spacing={5}>
        <Typography variant="h1">{articleTitle}</Typography>
        <Stack direction="row" justifyContent="center">
          {hasArticle && (
            <Button onClick={onOpenArticleClick} variant="contained">
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
            <Button variant="outlined" onClick={onOpenNextGalleryClick}>
              Nowsza galeria
            </Button>
          )}

          {hasPrevGallery && (
            <Button variant="outlined" onClick={onOpenPrevGalleryClick}>
              Wcześniejsza galeria
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export { Gallery };
