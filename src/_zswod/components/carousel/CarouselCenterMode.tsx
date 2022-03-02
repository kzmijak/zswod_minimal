import Slider from 'react-slick';
import { FC, useCallback, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Paper, Link, Typography, CardContent } from '@mui/material';
// utils
import { MotionInView, varFade } from 'src/components/animate';
import useResponsive from 'src/hooks/useResponsive';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { useAxiosLoadable } from 'src/_zswod/hooks/useAxiosLoadable';
import useIsMountedRef from 'use-is-mounted-ref';
import { Article } from 'src/_zswod/models/Article/article';
import { ArticlesMapper } from 'src/_zswod/mappers/articlesMapper';

// ----------------------------------------------------------------------

const CarouselImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all'),
}));

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return (
    <Paper
      sx={{
        mx: 1,
        borderRadius: 2,
        overflow: 'hidden',
        paddingTop: 'calc(16 /9 * 100%)',
        position: 'relative',
        '&:hover img': {
          width: '120%',
          height: '120%',
        },
      }}
    >
      <CarouselImgStyle alt={title} src={image} />
      <CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h4" paragraph>
          {title}
        </Typography>
        <Link
          to="#"
          color="inherit"
          variant="overline"
          component={RouterLink}
          sx={{
            opacity: 0.72,
            alignItems: 'center',
            display: 'inline-flex',
            transition: (theme) => theme.transitions.create('opacity'),
            '&:hover': { opacity: 1 },
          }}
        >
          Przeczytaj
          <Box
            component={Icon}
            icon="akar-icons:arrow-forward"
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </Link>
      </CardContent>
    </Paper>
  );
}

const CarouselCenterMode: FC = () => {
  const carouselRef = useRef<Slider | null>(null);
  const isDesktop = useResponsive('up', 'md');
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
    [isMountedRef]
  );

  useEffect(() => {
    getArticles(6);
  }, [getArticles]);

  if (!isLoaded) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isDesktop ? 5 : 2,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={carouselRef} {...settings}>
      {articles!.map((article, index) => {
        const item: CarouselItemProps = {
          ...article,
          description: article.short,
          image: articles![index].images[0]?.uri ?? '',
        };
        return (
          <MotionInView
            key={article.id}
            variants={index % 2 === 0 ? varFade().inDown : varFade().inUp}
          >
            <CarouselItem item={item} />
          </MotionInView>
        );
      })}
    </Slider>
  );
};

export { CarouselCenterMode };
