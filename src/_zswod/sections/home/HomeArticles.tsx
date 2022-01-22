// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// hooks
// components
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode } from 'src/_zswod/components/carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function HomeArticles() {
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
