// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// hooks
// components
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode } from 'src/_zswod/components/carousel';
import { useEffect, useRef } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

type HomeArticlesProps = {
  passRef: Function;
};

export default function HomeArticles({ passRef }: HomeArticlesProps) {
  const ref = useRef(null);

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  return (
    <RootStyle ref={ref}>
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
