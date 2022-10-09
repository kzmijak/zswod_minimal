import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, styled } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { toBase64 } from '../../utils/toBase64';

type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

const paddingByRatio: Record<ImageRatio, string> = {
  '4/3': 'calc(100% / 4 * 3)',
  '3/4': 'calc(100% / 3 * 4)',
  '6/4': 'calc(100% / 6 * 4)',
  '4/6': 'calc(100% / 4 * 6)',
  '16/9': 'calc(100% / 16 * 9)',
  '9/16': 'calc(100% / 9 * 16)',
  '21/9': 'calc(100% / 21 * 9)',
  '9/21': 'calc(100% / 9 * 21)',
  '1/1': '100%',
};

const SpanStyled = styled('span')({
  display: 'block',
  overflow: 'hidden',
  '& .wrapper': {
    backgroundSize: 'cover !important',
  },
});

type ImageProps = {
  src: File;
  alt?: string;
  ratio?: ImageRatio;
};

const Image: FC<ImageProps> = ({ ratio, src, alt }) => {
  const [image64, setImage64] = useState<string>('');

  const convertToBase64 = useCallback(async (file: File) => {
    const string64 = await toBase64(file);
    setImage64(string64);
  }, []);

  useEffect(() => {
    convertToBase64(src);
  }, [convertToBase64, src]);

  return (
    <Box
      component={SpanStyled}
      sx={{
        lineHeight: Boolean(ratio) ? 0 : 1,
        ...(Boolean(ratio)
          ? {
              width: 1,
              position: 'relative',
              pt: paddingByRatio[ratio!],
              '& .wrapper': {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                lineHeight: 0,
                position: 'absolute',
              },
            }
          : {
              '& .wrapper': {
                width: 1,
                height: 1,
              },
            }),
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        placeholderSrc="/assets/placeholder.svg"
        src={image64}
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
      />
    </Box>
  );
};

export { Image };
