import { Drawer, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGalleryState } from 'src/_old_zswod/redux/gallery/selectors';
import { GalleryContent } from '../../Shared/GalleryContent';

type SimplePresenterProps = {};

const SimplePresenter: FC<SimplePresenterProps> = ({}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { openedGallery } = useSelector(getGalleryState);

  useEffect(() => {
    setDrawerOpen(Boolean(openedGallery));
  }, [setDrawerOpen, openedGallery]);

  if (!Boolean(openedGallery)) {
    return null;
  }

  return (
    <Drawer anchor="right" variant="persistent" open={drawerOpen}>
      <Stack width="50vw" alignItems="center" justifyContent="center">
        <GalleryContent images={openedGallery!.images} />
      </Stack>
    </Drawer>
  );
};

export { SimplePresenter };
