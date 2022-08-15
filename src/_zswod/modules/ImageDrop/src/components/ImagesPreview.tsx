import { alpha, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC } from 'react';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import { ImageFile } from '../models/ImageFile';
import { formatNumber } from '../utils/formatNumber';
import { Image } from './controls/Image';

type ImagesPreviewProps = {
  images: ImageFile[];
  showPreview?: boolean;
  onRemove?: (file: ImageFile) => void;
};

const ImagePreview: FC<ImagesPreviewProps> = ({ images, onRemove, showPreview }) => {
  const hasFile = images.length > 0;

  return (
    <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
      <AnimatePresence>
        {images.map((image) => {
          const { name, size, preview } = image;

          if (showPreview) {
            return (
              <ListItem
                key={name}
                component={m.div}
                {...varFade().inRight}
                sx={{
                  p: 0,
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.25,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'inline-flex',
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                }}
              >
                <Image alt="preview" src={preview} ratio="1/1" />

                {onRemove && (
                  <IconButton
                    size="small"
                    onClick={() => onRemove(image)}
                    sx={{
                      top: 6,
                      p: '2px',
                      right: 6,
                      position: 'absolute',
                      color: 'common.white',
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                      '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                      },
                    }}
                  >
                    <Iconify icon={'eva:close-fill'} />
                  </IconButton>
                )}
              </ListItem>
            );
          }

          return (
            <ListItem
              key={name}
              component={m.div}
              {...varFade().inRight}
              sx={{
                my: 1,
                px: 2,
                py: 0.75,
                borderRadius: 0.75,
                border: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <Iconify
                icon={'eva:file-fill'}
                sx={{ width: 28, height: 28, color: 'text.secondary', mr: 2 }}
              />

              <ListItemText
                primary={name}
                secondary={formatNumber(size ?? 0)}
                primaryTypographyProps={{ variant: 'subtitle2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />

              {onRemove && (
                <IconButton edge="end" size="small" onClick={() => onRemove(image)}>
                  <Iconify icon={'eva:close-fill'} />
                </IconButton>
              )}
            </ListItem>
          );
        })}
      </AnimatePresence>
    </List>
  );
};

export { ImagePreview };
