import { alpha, IconButton, List, ListItem } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC, useCallback, useEffect, useState } from 'react';
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
  onRemove?: (file: File) => void;
};

const ImagePreview: FC<ImagesPreviewProps> = ({ images, onRemove }) => {
  const [images64, setImages64] = useState<Image64[]>([]);

  const convertAndAppend = useCallback(
    async (image: File) => {
      const newImageString = await toBase64(image);
      const newImage64 = {
        name: image.name,
        base64: newImageString ?? '',
      };
      setImages64([...images64, newImage64]);
    },
    [images64]
  );

  useEffect(() => {
    const hasAppended = images.length > images64.length;
    if (hasAppended) {
      convertAndAppend(images[images.length - 1]);
    }
  }, [images]);

  const handleRemove = (index: number) => {
    const newImages64 = images64.slice();
    newImages64.splice(index, 1);
    onRemove?.(images[index]);
    setImages64(newImages64);
  };

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
                  onClick={() => handleRemove(index)}
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
