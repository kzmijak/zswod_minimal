import Slider from 'react-slick';
import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Paper, Link, Typography, CardContent } from '@mui/material';
// utils
import { articlesMockData } from 'src/_zswod/utils/Mock/articles';
import { MotionInView, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = articlesMockData;

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

export default function CarouselCenterMode() {
  const carouselRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    // <RootStyle>
    <Slider ref={carouselRef} {...settings}>
      {MOCK_CAROUSELS.map((item) => (
        <MotionInView
          key={item.id}
          variants={item.id % 2 === 0 ? varFade().inDown : varFade().inUp}
        >
          <CarouselItem item={item} />
        </MotionInView>
      ))}
    </Slider>
    // </RootStyle>
  );
}
