import { alpha, styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { MotionInView, varFade } from 'src/components/animate';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { FC, useEffect, useRef, useState } from 'react';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import Image from 'src/components/Image';
import { LightboxModal } from 'src/_zswod/components/LightboxModal';
import { useSelector } from 'react-redux';
import { selectImages } from 'src/_zswod/modules/Images';
import useResponsive from 'src/hooks/useResponsive';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  zIndex: 11,
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    marginLeft: 25,
    textAlign: 'left',
  },
}));

type HomeGalleryProps = {
  passRef: Function;
};

const HomeGallery: FC<HomeGalleryProps> = ({ passRef }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const [imageOpen, setImageOpen] = useState<number>(-1);
  const isDesktop = useResponsive('up', 'md');

  const images = useSelector(selectImages(isDesktop ? 12 : 6));

  const isLight = theme.palette.mode === 'light';
  const imageUrls = images.map((image) => image.url);

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  return (
    <RootStyle ref={ref}>
      <Container>
        <ContentStyle>
          <MotionInView variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              Galeria
            </Typography>
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                ...(!isLight && {
                  textShadow: `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }),
              }}
            >
              Zrobiliśmy niedawno również kilka ładnych zdjęć
            </Typography>
          </MotionInView>
        </ContentStyle>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {images!.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <MotionInView variants={varFade().inUp}>
                <Image
                  sx={{
                    opacity: index < 2 ? 0.5 : 0.85,
                    height: { ...{ xs: 180, md: 400 } },
                    transition: theme.transitions.create('all'),
                    '&:hover': { opacity: 1 },
                    cursor: 'pointer',
                  }}
                  alt={item.alt}
                  src={item.url}
                  onClick={() => setImageOpen(index)}
                />
              </MotionInView>
            </Grid>
          ))}
        </Grid>

        <LightboxModal
          images={imageUrls}
          photoIndex={imageOpen}
          setPhotoIndex={setImageOpen}
          isOpen={imageOpen !== -1}
          onClose={() => setImageOpen(-1)}
        />

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
            <Typography>Zobacz całą galerię!</Typography>
            <ButtonEPanel to={PATHS_ABOUT.galeria.link} />
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
};

export { HomeGallery };
