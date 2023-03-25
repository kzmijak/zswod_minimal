import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Tooltip,
  IconButton,
} from '@mui/material';
import { FC } from 'react';
import { ImageModel } from 'src/_zswod/models/Image';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { SetAltButton } from './SetAltButton';

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

  const handleImageAltChange = (alt: string) => {
    const assembledImage = { ...image, alt };
    onImageChange?.(assembledImage);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt={alt} src={src}>
          <Typography variant="caption">Tekst alternatywny</Typography>
          <Typography fontWeight="bold">{alt}</Typography>
        </CardMedia>
      </CardActionArea>
      {mutable && (
        <CardActions>
          <SetAltButton alt={alt} src={src} onAltChange={handleImageAltChange} />
          <Button startIcon={<HighlightOffIcon />} onClick={onRemove}>
            Usuń
          </Button>
          <Tooltip title="Zmień kolejność">
            <IconButton sx={{ cursor: 'grab' }} onClick={onDrag}>
              <DragIndicatorIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      )}
    </Card>
  );
};

export { ImageGridItem };
