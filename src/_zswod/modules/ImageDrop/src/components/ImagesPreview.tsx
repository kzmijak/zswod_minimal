import { alpha, IconButton, List, ListItem } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC } from 'react';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import { Image } from './controls/Image';

type ImagesPreviewProps = {
  images: (File | string)[];
  onRemove?: (index: number) => void;
};

const ImagePreview: FC<ImagesPreviewProps> = ({ images, onRemove }) => (
  <List disablePadding sx={{ my: 3 }}>
    <AnimatePresence>
      {images.map((image, index) => (
        <ListItem
          key={index}
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
          <Image alt="preview" src={image} ratio="1/1" />

          {onRemove && (
            <IconButton
              size="small"
              onClick={() => onRemove(index)}
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
      ))}
    </AnimatePresence>
  </List>
);

export { ImagePreview };
