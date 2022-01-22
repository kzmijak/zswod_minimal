import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, StackProps, Grid } from '@mui/material';
// routes
// components
import Image from 'src/components/Image';
import Iconify from 'src/components/Iconify';
import TextIconLabel from 'src/components/TextIconLabel';
import { MotionContainer, varFade } from 'src/components/animate';
import useSettings from 'src/hooks/useSettings';
import { PATH_DASHBOARD_ROOT } from 'src/_zswod/routes/src/dashboard.routes';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    borderRadius: 10,
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { themeColorPresets, themeMode } = useSettings();
  const backgroundColor = themeMode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)';
  const textColor = themeMode === 'light' ? 'common.black' : 'common.white';
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src={`/overlay-home/overlay-home-${themeColorPresets}.png`}
          variants={varFade().in}
        />

        {/* <HeroImgStyle
          alt="hero"
          src="https://minimal-assets-api.vercel.app/assets/images/home/hero.png"
          variants={varFade().inUp}
        /> */}

        <Container>
          <ContentStyle sx={{ backgroundColor: backgroundColor }}>
            <Grid container justifyContent="left" sx={{ marginLeft: 10 }}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ color: textColor }}>
                  Szkoła Podstawowa im. Jana Pawła II-Papieża
                  <br /> w Orłowie Drewnianym
                  <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                    <br />
                    Witamy!
                  </Typography>
                </Typography>
              </m.div>
            </Grid>

            <Grid container justifyContent="right" sx={{ paddingX: 10 }}>
              <m.div variants={varFade().inRight}>
                <Typography sx={{ color: textColor }}>Możesz nas również odwiedzieć na:</Typography>
              </m.div>
            </Grid>

            <Grid container justifyContent="right" sx={{ paddingX: 10 }}>
              <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="sketch icon"
                        src="/logo/facebook.png"
                        sx={{ width: 20, height: 20, mr: 1 }}
                      />
                    }
                    value={
                      <Link
                        href="https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0"
                        target="_blank"
                        rel="noopener"
                        color={textColor}
                        sx={{ typography: 'body2' }}
                      >
                        Facebook
                      </Link>
                    }
                  />
                </m.div>

                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="talentowisko ikona"
                        src="/logo/talentowisko.png"
                        sx={{ width: 37, height: 20, mr: 1 }}
                      />
                    }
                    value={
                      <Link
                        href="https://www.figma.com/file/x7earqGD0VGFjFdk5v2DgZ/%5BPreview%5D-Minimal-Web?node-id=866%3A55474"
                        target="_blank"
                        rel="noopener"
                        color={textColor}
                        sx={{ typography: 'body2' }}
                      >
                        TalentowiSKO
                      </Link>
                    }
                  />
                </m.div>
              </Stack>
            </Grid>

            <Grid container justifyContent="right" sx={{ paddingX: 10 }}>
              <m.div variants={varFade().inRight}>
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to={PATH_DASHBOARD_ROOT}
                  startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                >
                  e-Panel
                </Button>
              </m.div>
            </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
