import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';
//
import { MIconButton } from './MIconButton';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 20,
  height: 20,
};

const RootStyle = styled(Box)(({ theme }) => ({
  zIndex: 9,
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[900], 0.48),
}));

const ArrowStyle = styled(MIconButton)(({ theme }) => ({
  padding: 6,
  opacity: 0.48,
  color: theme.palette.common.white,
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

interface CarouselControlsArrowsIndexProps extends BoxProps {
  arrowLine?: boolean;
  index: number;
  total: number;
  onNext?: VoidFunction;
  onPrevious?: VoidFunction;
}

export default function CarouselControlsArrowsIndex({
  arrowLine,
  index,
  total,
  onNext,
  onPrevious,
  ...other
}: CarouselControlsArrowsIndexProps) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle {...other}>
      <ArrowStyle size="small" onClick={onPrevious}>
        {arrowLine ? (
          isRTL ? (
            <KeyboardArrowRightRoundedIcon {...ICON_SIZE} />
          ) : (
            <KeyboardArrowLeftRoundedIcon {...ICON_SIZE} />
          )
        ) : isRTL ? (
          <ArrowRightIcon {...ICON_SIZE} />
        ) : (
          <ArrowLeftIcon {...ICON_SIZE} />
        )}
      </ArrowStyle>

      <Typography variant="subtitle2">
        {index + 1}/{total}
      </Typography>

      <ArrowStyle size="small" onClick={onNext}>
        {arrowLine ? (
          isRTL ? (
            <KeyboardArrowLeftRoundedIcon {...ICON_SIZE} />
          ) : (
            <KeyboardArrowRightRoundedIcon {...ICON_SIZE} />
          )
        ) : isRTL ? (
          <ArrowLeftIcon {...ICON_SIZE} />
        ) : (
          <ArrowRightIcon {...ICON_SIZE} />
        )}
      </ArrowStyle>
    </RootStyle>
  );
}
