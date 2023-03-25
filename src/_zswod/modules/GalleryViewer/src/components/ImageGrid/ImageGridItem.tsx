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
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ImageFormDialog } from './ImageFormDialog';

type ImageGridItemProps = {
  image: ImageModel;
  mutable?: boolean;
  onImageChange?: (image: ImageModel) => void;
  onRemove?: () => void;
  onDrag?: () => void;
};
const ImageGridItem: FC<ImageGridItemProps> = ({
  mutable,
  onImageChange,
  onRemove,
  onDrag,
  image,
}) => {
  const { alt, src } = image;

  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const handleImageAltChange = (alt: string) => {
    const assembledImage = { ...image, alt };
    onImageChange?.(assembledImage);
    closeDialog();
  };

  return (
    <>
      <Paper variant="outlined">
        <Card>
          <CardActionArea onClick={openDialog}>
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
              <Stack direction="row" justifyContent="flex-end" sx={{ minWidth: '100%' }}>
                <Tooltip title="Usuń">
                  <IconButton onClick={onRemove}>
                    <HighlightOffIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Zmień kolejność">
                  <IconButton disableTouchRipple sx={{ cursor: 'grab' }} onClick={onDrag}>
                    <DragIndicatorIcon />
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
        onClose={closeDialog}
        onSubmit={handleImageAltChange}
      />
    </>
  );
};

export { ImageGridItem };
