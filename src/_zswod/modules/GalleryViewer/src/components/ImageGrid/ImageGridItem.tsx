import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Tooltip,
  IconButton,
  Stack,
  Paper,
  Box,
} from '@mui/material';
import { FC, useState } from 'react';
import { ImageModel } from 'src/_zswod/models/Image';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ImageFormDialog } from './ImageFormDialog';
import SlideshowIcon from '@mui/icons-material/Slideshow';

type ImageGridItemProps = {
  image: ImageModel;
  mutable?: boolean;
  onImageChange?: (image: ImageModel) => void;
  onRemove?: () => void;
  onFullScreenOpen?: () => void;
};
const ImageGridItem: FC<ImageGridItemProps> = ({
  mutable,
  onImageChange,
  onRemove,
  onFullScreenOpen,
  image,
}) => {
  const { alt, src } = image;

  const [dialogOpen, setDialogOpen] = useState(false);
  const openEditDialog = () => setDialogOpen(true);
  const closeEditDialog = () => setDialogOpen(false);

  const handleImageAltChange = (alt: string) => {
    const assembledImage = { ...image, alt };
    onImageChange?.(assembledImage);
    closeEditDialog();
  };

  const handleClickImage = () => {
    if (mutable) openEditDialog();
    else onFullScreenOpen?.();
  };

  return (
    <>
      <Paper variant="outlined">
        <Card>
          <CardActionArea onClick={handleClickImage}>
            <CardMedia component="img" alt={alt} src={src} sx={{ height: 200 }} />
            <Box padding={1}>
              <Typography variant="caption">Tekst alternatywny:</Typography>
              {Boolean(alt) && (
                <Typography noWrap variant="subtitle2">
                  {alt}
                </Typography>
              )}

              {!Boolean(alt) && (
                <Typography variant="subtitle2" fontWeight="bold" color="error">
                  Kliknij żeby uzupełnić
                </Typography>
              )}
            </Box>
          </CardActionArea>
          {mutable && (
            <CardActions>
              <Stack direction="row" justifyContent="space-between" sx={{ minWidth: '100%' }}>
                <Tooltip title="Pełny ekran">
                  <IconButton onClick={onFullScreenOpen}>
                    <SlideshowIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Usuń">
                  <IconButton onClick={onRemove}>
                    <HighlightOffIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </CardActions>
          )}
        </Card>
      </Paper>
      <ImageFormDialog
        alt={alt}
        src={src}
        open={dialogOpen}
        onClose={closeEditDialog}
        onSubmit={handleImageAltChange}
      />
    </>
  );
};

export { ImageGridItem };
