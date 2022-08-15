import { Box, BoxProps, styled, SxProps, Theme } from '@mui/material';
import { FC } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

type ImageRatio = '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';

function getRatio(ratio: ImageRatio = '1/1') {
  return {
    '4/3': 'calc(100% / 4 * 3)',
    '3/4': 'calc(100% / 3 * 4)',
    '6/4': 'calc(100% / 6 * 4)',
    '4/6': 'calc(100% / 4 * 6)',
    '16/9': 'calc(100% / 16 * 9)',
    '9/16': 'calc(100% / 9 * 16)',
    '21/9': 'calc(100% / 21 * 9)',
    '9/21': 'calc(100% / 9 * 21)',
    '1/1': '100%',
  }[ratio];
}

const BoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'ratio',
})<{ ratio?: ImageRatio }>(({ ratio }) => {
  const hasRatio = Boolean(ratio);

  return {
    display: 'block',
    overflow: 'hidden',
    '& wrapper': {
      backgroundSize: 'cover !important',
      ...(hasRatio
        ? {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            position: 'absolute',
          }
        : {
            width: 1,
            height: 1,
          }),
    },
    ...(hasRatio
      ? {
          width: 1,
          lineHeight: 0,
          position: 'relative',
          pt: getRatio(ratio),
        }
      : {
          lineHeight: 1,
        }),
  };
});

type ImageProps = BoxProps &
  LazyLoadImageProps & {
    sx?: SxProps<Theme>;
    ratio?: ImageRatio;
    disabledEffect?: boolean;
  };

const Image: FC<ImageProps> = ({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  ...other
}) => (
  <BoxStyled component="span" ratio={ratio} sx={sx}>
    <Box
      component={LazyLoadImage}
      wrapperClassName="wrapper"
      effect={disabledEffect ? undefined : effect}
      placeholderSrc="/assets/placeholder.svg"
      sx={{ width: 1, height: 1, objectFit: 'cover' }}
      {...other}
    />
  </BoxStyled>
);

export { Image };
