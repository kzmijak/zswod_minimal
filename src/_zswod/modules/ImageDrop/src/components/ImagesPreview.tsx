import { alpha, IconButton, List, ListItem } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC, useCallback, useEffect, useReducer } from 'react';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import { toBase64 } from '../utils/toBase64';
import { Image } from './controls/Image';

type Image64 = {
  base64: string;
  name: string;
};

type ImagesPreviewProps = {
  images: File[];
  onRemove?: (index: number) => void;
};

const ImagePreview: FC<ImagesPreviewProps> = ({ images, onRemove }) => {
  const [images64, dispatch] = useReducer(
    (
      images64: Image64[],
      action: { type: 'append' | 'reset'; payload?: Image64; index?: number }
    ) => {
      switch (action.type) {
        case 'append':
          return [...images64, action.payload!];
        case 'reset':
          return [];
        default:
          return images64;
      }
    },
    []
  );

  const convertAndAppend = useCallback(async (image: File) => {
    const newImageString = await toBase64(image);
    const newImage64 = {
      name: image.name,
      base64: newImageString ?? '',
    };
    dispatch({
      type: 'append',
      payload: newImage64,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'reset',
    });

    images.forEach((image) => {
      convertAndAppend(image);
    });
  }, [convertAndAppend, images]);

  return (
    <List disablePadding sx={{ my: 3 }}>
      <AnimatePresence>
        {images64.map((image, index) => {
          const { name, base64 } = image;

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
              <Image alt="preview" src={base64} ratio="1/1" />

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
          );
        })}
      </AnimatePresence>
    </List>
  );
};

export { ImagePreview };
