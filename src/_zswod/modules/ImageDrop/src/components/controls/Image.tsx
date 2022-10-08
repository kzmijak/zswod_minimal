import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import { Theme } from '@mui/material/styles';
import { Box, BoxProps, SxProps, styled } from '@mui/material';
import { FC } from 'react';

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

type ImageProps = BoxProps &
  LazyLoadImageProps & {
    sx?: SxProps<Theme>;
    ratio?: ImageRatio;
    disabledEffect?: boolean;
  };

const SpanStyled = styled('span')({
  display: 'block',
  overflow: 'hidden',
  '& .wrapper': {
    backgroundSize: 'cover !important',
  },
});

const Image: FC<ImageProps> = ({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  ...other
}) => (
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
      ...sx,
    }}
  >
    <Box
      component={LazyLoadImage}
      wrapperClassName="wrapper"
      effect={disabledEffect ? undefined : effect}
      placeholderSrc="/assets/placeholder.svg"
      sx={{ width: 1, height: 1, objectFit: 'cover' }}
      {...other}
    />
  </Box>
);

export { Image };
