import { FC } from 'react';
import { Box, SxProps, useTheme } from '@mui/material';

type UploadIllustrationProps = {
  sx?: SxProps;
};

const UploadIllustration: FC<UploadIllustrationProps> = ({ sx }) => {
  const theme = useTheme();
  const COLOR_PRIMARY_MAIN = theme.palette.primary.main;
  const COLOR_SECONDARY_DARK = theme.palette.primary.dark;
  const COLOR_SECONDARY_MAIN = theme.palette.primary.main;
  const COLOR_SECONDARY_LIGHT = theme.palette.primary.light;

  return (
    <Box sx={sx}>
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M853.333333 874.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334V234.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h682.666666c46.933333 0 85.333333 38.4 85.333334 85.333334v554.666666c0 46.933333-38.4 85.333333-85.333334 85.333334z"
            fill={COLOR_SECONDARY_DARK}
          />
          <path
            d="M746.666667 341.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
            fill={COLOR_SECONDARY_LIGHT}
          />
          <path d="M426.666667 341.333333L192 682.666667h469.333333z" fill={COLOR_SECONDARY_MAIN} />
          <path
            d="M661.333333 469.333333l-170.666666 213.333334h341.333333z"
            fill={COLOR_SECONDARY_LIGHT}
          />
          <path
            d="M810.666667 810.666667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
            fill={COLOR_PRIMARY_MAIN}
          />
          <path d="M768 682.666667h85.333333v256h-85.333333z" fill="#FFFFFF" />
          <path d="M682.666667 768h256v85.333333H682.666667z" fill="#FFFFFF" />
        </g>
      </svg>
    </Box>
  );
};

export { UploadIllustration };
