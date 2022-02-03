import { m } from 'framer-motion';

import Slider from 'react-slick';
import { useState, useRef, useEffect, FC, MouseEventHandler } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CarouselControlsArrowsIndex from './CarouselControlsArrowsIndex';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { LightboxModal } from 'src/_zswod/components';
import { useSelector } from 'react-redux';
import { RootState } from 'src/_zswod/redux/store';
// utils

// ----------------------------------------------------------------------
const variants = {
  onInit: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  onEnd: { opacity: 0 },
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
  image: string;
};

function LargeItem({
  item,
  onClick,
}: {
  item: CarouselItemProps;
  onClick: MouseEventHandler<HTMLImageElement>;
}) {
  const { image, alt } = item;

  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: {
          xs: '100%',
          md: '50%',
        },
      }}
    >
      <LargeImgStyle sx={{ cursor: 'pointer' }} onClick={onClick} alt={alt} src={image} />
    </Box>
  );
}

function ThumbnailItem({ item }: { item: CarouselItemProps }) {
  const { image, alt } = item;

  return <ThumbImgStyle alt={alt} src={image} />;
}

const CarouselThumbnail: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const { openedGallery, previousGallery } = useSelector((state: RootState) => state.gallery);

  const { getArticleGallery } = useArticlesContext();
  const images = getArticleGallery(openedGallery ?? previousGallery!).map<
    CarouselItemProps & { id: number }
  >((i) => ({
    id: i.index,
    alt: i.alt,
    image: i.uri,
  }));

  const [imageOpen, setImageOpen] = useState<number>(-1);

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
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
    <m.div
      initial={{ opacity: 0 }}
      variants={variants}
      animate={openedGallery !== null ? 'onInit' : 'onEnd'}
    >
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
            {images.map((image) => (
              <LargeItem key={image.id} onClick={() => setImageOpen(currentIndex)} item={image} />
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
              <ThumbnailItem key={item.alt} item={item} />
            ))}
          </Slider>
        </Box>

        <LightboxModal
          images={images.map((i) => i.image)}
          photoIndex={imageOpen!}
          setPhotoIndex={setImageOpen}
          isOpen={imageOpen !== -1}
          onClose={() => setImageOpen(-1)}
        />
      </RootStyle>
    </m.div>
  );
};

export { CarouselThumbnail };
