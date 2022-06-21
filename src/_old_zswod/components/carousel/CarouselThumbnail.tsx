import Slider from 'react-slick';
import { useState, useRef, useEffect, FC, MouseEventHandler } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CarouselControlsArrowsIndex from './controls/CarouselControlArrowsIndex';
import LightboxModal from '../LightboxModal';
// utils

// ----------------------------------------------------------------------

type CarouselImage = {
  id: number;
  alt: string;
  uri: string;
  title: string;
};

const THUMB_SIZE = 64;

const RootStyle = styled(Box)(({ theme }) => {
  const isRTL = theme.direction === 'rtl';

  return {
    root: {
      '& .slick-slide': {
        float: isRTL ? 'right' : 'left',
      },
    },
  };
});

const LargeImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

const ThumbImgStyle = styled('img')(({ theme }) => ({
  opacity: 0.48,
  width: THUMB_SIZE,
  cursor: 'pointer',
  height: THUMB_SIZE,
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadiusSm,
  '&:hover': {
    opacity: 0.72,
    transition: theme.transitions.create('opacity'),
  },
}));

// ----------------------------------------------------------------------

type CarouselItemProps = {
  alt: string;
  title: string;
  uri: string;
};

function LargeItem({
  item,
  onClick,
}: {
  item: CarouselItemProps;
  onClick: MouseEventHandler<HTMLImageElement>;
}) {
  const { uri, alt } = item;

  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: {
          xs: '100%',
          md: '50%',
        },
        cursor: 'pointer',
      }}
    >
      <LargeImgStyle alt={alt} src={uri} onClick={onClick} />
    </Box>
  );
}

function ThumbnailItem({ item }: { item: CarouselItemProps }) {
  const { uri, alt } = item;

  return <ThumbImgStyle alt={alt} src={uri} />;
}

type CarouselThumbnailProps = {
  images: CarouselImage[];
};

const CarouselThumbnail: FC<CarouselThumbnailProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const [nav3, setNav3] = useState<boolean>(false);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const slickTo = (index: number) => {
    slider1.current?.slickGoTo(index);
    slider2.current?.slickGoTo(index);
  };

  const settings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: images.length > 3 ? 3 : images.length,
  };

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  const handlePrevious = () => {
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider2.current?.slickNext();
  };

  return (
    <RootStyle>
      <Box
        sx={{
          zIndex: 0,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Slider {...settings1} asNavFor={nav2} ref={slider1}>
          {images.map((item) => (
            <LargeItem key={item.id} item={item} onClick={() => setNav3(true)} />
          ))}
        </Slider>
        <CarouselControlsArrowsIndex
          index={currentIndex}
          total={images.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </Box>

      <Box
        sx={{
          mt: 3,
          mx: 'auto',
          ...(images.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
          ...(images.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
          ...(images.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(images.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
          ...(images.length === 5 && { maxWidth: THUMB_SIZE * 6 }),
          '& .slick-current img': {
            opacity: 1,
            border: (theme) => `solid 3px ${theme.palette.primary.main}`,
          },
        }}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {images.map((item) => (
            <ThumbnailItem key={item.id} item={item} />
          ))}
        </Slider>

        <LightboxModal
          images={images.map((i) => i.uri)}
          photoIndex={currentIndex!}
          isOpen={nav3}
          setPhotoIndex={slickTo}
          onClose={() => setNav3(false)}
        />
      </Box>
    </RootStyle>
  );
};

export { CarouselThumbnail };
export type { CarouselImage };
