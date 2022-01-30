// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography } from '@mui/material';
// hooks
// components
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode } from 'src/_zswod/components/carousel';
import { useEffect, useRef } from 'react';
import { ButtonEPanel } from 'src/_zswod/components';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';

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
          <Typography variant="h2" sx={{ mb: 10 }}>
            Oto co się ostatnio wydarzyło!
          </Typography>
        </MotionInView>

        <CarouselCenterMode />

        <MotionInView variants={varFade().inLeft}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent={{ xd: 'center', md: 'flex-end' }}
            alignItems="center"
            spacing={2}
            sx={{
              mt: 4,
              mb: 2,
            }}
          >
            <Typography>Jest ich więcej!</Typography>
            <ButtonEPanel to={PATHS_ABOUT.Nowości} />
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
