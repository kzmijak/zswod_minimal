import { Container, Drawer, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CarouselThumbnail } from 'src/_zswod/components/carousel/CarouselThumbnail';
import { getGalleryState } from 'src/_zswod/redux/gallery/selectors';

type PresenterProps = {};

const Presenter: FC<PresenterProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { openedGallery } = useSelector(getGalleryState);

  useEffect(() => {
    setDrawerOpen(Boolean(openedGallery));
  }, [setDrawerOpen, openedGallery]);

  if (!Boolean(openedGallery)) {
    return null;
  }

  return (
    <Drawer anchor="right" variant="persistent" open={drawerOpen} sx={{ width: '1000px' }}>
      <Container>
        <CarouselThumbnail images={openedGallery!.images} />
      </Container>
    </Drawer>
  );
};

export { Presenter };
