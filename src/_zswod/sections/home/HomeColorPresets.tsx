import { capitalCase } from 'change-case';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
// hooks
import useSettings from 'src/hooks/useSettings';
// components
import Image from 'src/components/Image';
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode } from 'src/_zswod/components/carousel';
import Slider from 'react-slick';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            Nowości
          </Typography>
        </MotionInView>

        <MotionInView variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 19 }}>
            Oto co się ostatnio wydarzyło!
          </Typography>
        </MotionInView>

        <CarouselCenterMode />
      </Container>
    </RootStyle>
  );
}
