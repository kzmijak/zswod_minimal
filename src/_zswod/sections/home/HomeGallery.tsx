// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
// components
import Image from 'src/components/Image';
import { MotionInView, varFade } from 'src/components/animate';
import { imagesMockData } from 'src/_zswod/utils/Mock/images';
import LightboxModal from 'src/components/LightboxModal';
import { useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  marginLeft: 25,
  textAlign: 'center',
  zIndex: 11,
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function HomeGallery() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const images = imagesMockData.slice(0, 12);
  const imageUrls = images.map((image) => image.uri);
  const [imageOpen, setImageOpen] = useState<number>(-1);

  return (
    <RootStyle>
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
                  textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }),
              }}
            >
              Zrobiliśmy niedawno również kilka ładnych zdjęć
            </Typography>
          </MotionInView>
        </ContentStyle>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {images.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <MotionInView variants={varFade().inUp}>
                <Image
                  sx={{
                    opacity: index < 2 ? 0.5 : 0.85,
                    height: 400,
                    transition: (theme) => theme.transitions.create('all'),
                    '&:hover': { opacity: 1 },
                    cursor: 'pointer',
                  }}
                  alt={item.alt}
                  src={item.uri}
                  onClick={() => setImageOpen(index)}
                />
              </MotionInView>
            </Grid>
          ))}
        </Grid>

        <LightboxModal
          images={imageUrls}
          photoIndex={imageOpen!}
          setPhotoIndex={setImageOpen}
          isOpen={imageOpen !== -1}
          onClose={() => setImageOpen(-1)}
        />
      </Container>
    </RootStyle>
  );
}
