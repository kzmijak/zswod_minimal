import Slider from 'react-slick';
import { FC } from 'react';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, CardContent } from '@mui/material';
import { varFade } from 'src/components/animate';
import useResponsive from 'src/hooks/useResponsive';
import { m } from 'framer-motion';
import { useBlobUrl } from 'src/_zswod/modules/Blob';
import { Link } from 'react-router-dom';

const SliderStyled = styled(Slider)(({ theme }) => ({
  '.slick-prev:before,.slick-next:before': {
    color: theme.palette.primary.main,
  },
}));

const CarouselImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: theme.transitions.create('all'),
}));

type CarouselItemProps = {
  title: string;
  blobId: string;
  articleUrl: string;
};

const CarouselItem: FC<CarouselItemProps> = ({ blobId, articleUrl, title }) => {
  const { getUrl } = useBlobUrl();
  return (
    <Link to={articleUrl}>
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
        <CarouselImgStyle alt={title} src={getUrl(blobId)} />
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
          <Typography variant="h4" paragraph sx={{ cursor: 'pointer' }}>
            {title}
          </Typography>
          <Typography
            variant="overline"
            sx={{
              opacity: 0.72,
              cursor: 'pointer',
              alignItems: 'center',
              display: 'inline-flex',
              transition: (theme) => theme.transitions.create('opacity'),
              '&:hover': { opacity: 1 },
            }}
          >
            Zobacz
            <Box
              component={Icon}
              icon="akar-icons:arrow-forward"
              sx={{ width: 16, height: 16, ml: 1 }}
            />
          </Typography>
        </CardContent>
      </Paper>
    </Link>
  );
};

type CarouselCenterModeProps = {
  items: CarouselItemProps[];
};

const CarouselCenterMode: FC<CarouselCenterModeProps> = ({ items }) => {
  const isDesktop = useResponsive('up', 'md');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isDesktop ? 5 : 3,
    slidesToScroll: 1,
    draggable: false,
  };

  const getFadingAnimation = (index: number) =>
    index % 2 === 0 ? varFade().inDown : varFade().inUp;

  return (
    <SliderStyled {...settings}>
      {items.map((item, index) => (
        <m.div key={index} variants={getFadingAnimation(index)}>
          <CarouselItem key={index} {...item} />
        </m.div>
      ))}
    </SliderStyled>
  );
};

export { CarouselCenterMode };
export type { CarouselItemProps };
