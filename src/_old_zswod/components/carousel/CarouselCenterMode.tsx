import Slider from 'react-slick';
import { FC, MouseEventHandler, useRef } from 'react';
import { Icon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, CardContent } from '@mui/material';
// utils
import { MotionInView, varFade } from 'src/components/animate';
import useResponsive from 'src/hooks/useResponsive';

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
  onClick: MouseEventHandler<HTMLSpanElement>;
};

function CarouselItem({ item }: { item: CarouselItemProps }) {
  const { image, title, onClick } = item;
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
        <Typography onClick={onClick} variant="h4" paragraph sx={{ cursor: 'pointer' }}>
          {title}
        </Typography>
        <Typography
          onClick={onClick}
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
  );
}

const CarouselCenterMode: FC<{ items: CarouselItemProps[]; animate?: boolean }> = ({
  items,
  animate = true,
}) => {
  const carouselRef = useRef<Slider | null>(null);
  const isDesktop = useResponsive('up', 'md');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isDesktop ? 5 : 2,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={carouselRef} {...settings}>
      {items!.map((item, index) => (
        <MotionInView
          key={index}
          variants={animate ? (index % 2 === 0 ? varFade().inDown : varFade().inUp) : undefined}
        >
          <CarouselItem key={index} item={item} />
        </MotionInView>
      ))}
    </Slider>
  );
};

export { CarouselCenterMode };
export type { CarouselItemProps };