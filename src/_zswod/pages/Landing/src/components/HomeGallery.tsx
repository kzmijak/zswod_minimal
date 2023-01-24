import { alpha, styled } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { varFade } from 'src/components/animate';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { FC, useEffect, useRef, useState } from 'react';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { LightboxModal } from 'src/_zswod/components/LightboxModal';
import { useSelector } from 'react-redux';
import useResponsive from 'src/hooks/useResponsive';
import { m } from 'framer-motion';
import { selectArticleHeadersImages } from 'src/_zswod/modules/ArticleHeaders';
import { Blob } from 'src/_zswod/modules/Blob';

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

  const images = useSelector(selectArticleHeadersImages(isDesktop ? 12 : 6));

  const isLight = theme.palette.mode === 'light';
  const imageBlobIds = images.map((image) => image.blobId);

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  return (
    <RootStyle ref={ref}>
      <Container>
        <ContentStyle>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              Galeria
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
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
          </m.div>
        </ContentStyle>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {images.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <m.div variants={varFade().inUp}>
                <Blob
                  sx={{
                    opacity: index < 2 ? 0.5 : 0.85,
                    height: { ...{ xs: 180, md: 400 } },
                    transition: theme.transitions.create('all'),
                    '&:hover': { opacity: 1 },
                    cursor: 'pointer',
                  }}
                  alt={item.alt}
                  id={item.blobId}
                  onClick={() => setImageOpen(index)}
                />
              </m.div>
            </Grid>
          ))}
        </Grid>

        <LightboxModal
          images={imageBlobIds}
          photoIndex={imageOpen}
          setPhotoIndex={setImageOpen}
          isOpen={imageOpen !== -1}
          onClose={() => setImageOpen(-1)}
        />

        <m.div variants={varFade().inLeft}>
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
        </m.div>
      </Container>
    </RootStyle>
  );
};

export { HomeGallery };
