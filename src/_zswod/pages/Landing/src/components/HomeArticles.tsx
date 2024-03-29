import { styled } from '@mui/material/styles';
import { Container, Stack, Typography } from '@mui/material';
import { varFade } from 'src/components/animate';
import { CarouselCenterMode, CarouselItemProps } from 'src/_zswod/components/CarouselCenterMode';
import { FC, useEffect, useRef } from 'react';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { PATH_DASHBOARD } from 'src/_zswod/routes/src/paths';
import { useArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { m } from 'framer-motion';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

type HomeArticlesProps = {
  passRef: Function;
};

const HomeArticles: FC<HomeArticlesProps> = ({ passRef }) => {
  const ref = useRef(null);
  const { articleHeaders } = useArticleHeaders();

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  const carouselItems: CarouselItemProps[] = articleHeaders.map((header) => ({
    title: header.title,
    description: header.short,
    src: header.previewImage.src,
    articleUrl: `${PATH_DASHBOARD.articles}/${header.titleNormalized}`,
  }));

  return (
    <RootStyle ref={ref}>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            Nowości
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 10 }}>
            Oto co się ostatnio wydarzyło!
          </Typography>
        </m.div>

        <CarouselCenterMode items={carouselItems} />

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
            <Typography>Jest ich więcej!</Typography>
            <ButtonEPanel to={PATH_DASHBOARD.articles} />
          </Stack>
        </m.div>
      </Container>
    </RootStyle>
  );
};

export { HomeArticles };
