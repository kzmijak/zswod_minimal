import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { MotionInView, varFade } from 'src/components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// -----------------------------------------------------------------------

type HomeContactProps = {
  passRef: Function;
};

export default function HomeContact({ passRef }: HomeContactProps) {
  const ref = useRef(null);

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  return (
    <RootStyle ref={ref}>
      <Container>
        <Box
          sx={{
            textAlign: 'left',
            mb: { xs: 10, md: 25 },
          }}
        >
          <MotionInView variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Kontakt
            </Typography>
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <Typography variant="h2">Coś ważnego? Daj nam znać!</Typography>
          </MotionInView>

          <Grid container spacing={5} sx={{ mt: { xs: 5, md: 10 } }}>
            <Grid item xs={12} md={8}>
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h3">
                  🏫 Szkoła
                  <Typography variant="body1">Orłów Drewniany 60A</Typography>
                  <Typography variant="body1">22-375 Izbica</Typography>
                </Typography>
              </MotionInView>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionInView variants={varFade().inLeft}>
                <Typography variant="h3">
                  📞 Sekretariat
                  <Typography variant="body1">Godziny otwarcia: 7:30 - 15:30</Typography>
                  <Typography variant="body1">📞 Telefon: 84 61 83 420</Typography>
                  <Typography variant="body1">📩 E-Mail: renatazmijak@gmail.com</Typography>
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  );
}
