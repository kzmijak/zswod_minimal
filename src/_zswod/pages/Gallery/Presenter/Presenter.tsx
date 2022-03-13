import { Container } from '@mui/material';
import { m } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CarouselThumbnail } from 'src/_zswod/components/carousel/CarouselThumbnail';
import { RootState } from 'src/_zswod/redux/store';

const variants = {
  onInit: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  onEnd: { opacity: 0 },
};

const Presenter: FC = () => {
  const { openedGallery, previousGallery } = useSelector((state: RootState) => state.gallery);

  if (!Boolean(openedGallery) && !Boolean(previousGallery)) return null;

  const { images } = openedGallery ?? previousGallery!;

  return (
    <m.div
      initial={{ opacity: 0 }}
      variants={variants}
      animate={openedGallery !== null ? 'onInit' : 'onEnd'}
    >
      <Container>
        <CarouselThumbnail images={images} />
      </Container>
    </m.div>
  );
};

export { Presenter };
