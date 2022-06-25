// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography } from '@mui/material';
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode, CarouselItemProps } from 'src/_zswod/components/CarouselCenterMode';
import { FC, useEffect, useRef } from 'react';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectArticleHeaders } from 'src/_zswod/modules/ArticlesList';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

type HomeArticlesProps = {
  passRef: Function;
};

const HomeArticles: FC<HomeArticlesProps> = ({ passRef }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const articleHeaders = useSelector(selectArticleHeaders);

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  const carouselItems: CarouselItemProps[] = articleHeaders.map((header) => ({
    title: header.title,
    description: header.short,
    image: header.previewImageUrl,
    onClick: () => navigate(`${PATHS_ABOUT.nowosci.link}/${header.titleNormalized}`),
  }));

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

        <CarouselCenterMode animate items={carouselItems} />

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
            <ButtonEPanel to={PATHS_ABOUT.nowosci.link} />
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
};

export { HomeArticles };
