import { Dialog } from '@mui/material';
import { FC, useState } from 'react';
import { BlobModel } from 'src/_zswod/models/Blob';
import { arrayMapBlobToImage } from 'src/_zswod/models/extraMappers';
import { ImageModel } from 'src/_zswod/models/Image';
import { BlobsSelect, useBlobUrl } from 'src/_zswod/modules/Blob';
import { GalleryIllustration } from '../../assets/illustration_gallery';
import { GetImagesButton } from './GetImagesButton';

type ImageCreatorProps = {
  startingOrder?: number;
  onCreate: (images: ImageModel[]) => void;
};

const ImageCreator: FC<ImageCreatorProps> = ({ onCreate, startingOrder }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { getUrl } = useBlobUrl();

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (blobs: BlobModel[]) => {
    const blobsConverted = arrayMapBlobToImage(blobs, getUrl, startingOrder);
    onCreate(blobsConverted);
    closeDialog();
  };

  return (
    <>
      <GetImagesButton
        illustration={<GalleryIllustration sx={{ width: 100, height: 100 }} />}
        onClick={() => setDialogOpen(true)}
        subtitle="Wybierz z&nbsp;zapisanych"
      />
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <BlobsSelect onSubmit={handleSubmit} />
      </Dialog>
    </>
  );
};

export { ImageCreator };
