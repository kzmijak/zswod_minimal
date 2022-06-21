// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography } from '@mui/material';
// hooks
// components
import { MotionInView, varFade } from 'src/components/animate';
import { CarouselCenterMode } from 'src/_old_zswod/components/carousel';
import { useCallback, useEffect, useRef } from 'react';
import { ButtonEPanel } from 'src/_old_zswod/components';
import { PATHS_ABOUT } from 'src/_old_zswod/routes/src/menu.paths';
import { useArticlesContext } from 'src/_old_zswod/hooks/useArticlesContext';
import { useAxiosLoadable } from 'src/_old_zswod/hooks/useAxiosLoadable';
import { ArticlesMapper } from 'src/_old_zswod/mappers/articlesMapper';
import { Article } from 'src/_old_zswod/models/Article/article';
import useIsMountedRef from 'use-is-mounted-ref';
import { CarouselItemProps } from 'src/_old_zswod/components/carousel/CarouselCenterMode';
import { useNavigate } from 'react-router';

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

  const navigate = useNavigate();

  useEffect(() => {
    passRef(ref);
  }, [passRef, ref]);

  const {
    actions: { getArticlesList },
  } = useArticlesContext();

  const isMountedRef = useIsMountedRef();

  const {
    requestState: { isLoaded, data: articles },
    onError,
    onSuccess,
    startLoading,
  } = useAxiosLoadable<Article[]>();

  const { ListResponseToModel } = ArticlesMapper;

  const getArticles = useCallback(
    async (count: number) => {
      startLoading();
      try {
        const response = await getArticlesList(count);
        onSuccess(ListResponseToModel(response));
      } catch (error) {
        onError(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMountedRef]
  );

  useEffect(() => {
    getArticles(6);
  }, [getArticles]);

  if (!Boolean(isLoaded) || !Boolean(articles)) {
    return null;
  }

  const carouselItems: CarouselItemProps[] = articles!.map((article, index) => ({
    title: article.title,
    description: article.short,
    image: articles![index].images[0]?.uri ?? '',
    onClick: () => navigate(`${PATHS_ABOUT.Nowości}/${article.id}`),
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

        <CarouselCenterMode animate items={carouselItems!} />

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
