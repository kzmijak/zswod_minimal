import { FC, useEffect, useState } from 'react';
import { ImageFormContent } from '../models/ImageFormContent';
import {
  Dialog,
  Fab,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { ImageForm } from './ImageForm';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { GalleryIllustration } from '../assets/illustration_gallery';
import { GetImagesButton } from './utils/GetImagesButton';
import { Blob, BlobsSelect } from 'src/_zswod/modules/Blob';
import Scrollbar from 'src/components/Scrollbar';
import { arrayMapBlobToImage } from '../utils/mapBlobToImage';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { removeFromArray } from 'src/_zswod/utils/removeFromArray';

type ArticleImageDropProps = {
  images: ImageFormContent[];
  onChange: (newArray: ImageFormContent[]) => void;
};

const ArticleImageDrop: FC<ArticleImageDropProps> = ({ images, onChange }) => {
  const [savedImagesOpen, setSavedImagesOpen] = useState(false);
  const [imageFormOpen, setImageFormOpen] = useState(false);
  const [editedImage, setEditedImage] = useState<ImageFormContent | null>(null);
  const theme = useTheme();

  const handleSetPreview = (imageForm: ImageFormContent) => {
    const newImage = { ...imageForm, isPreview: !imageForm.isPreview };
    const imagesCopy = images.slice();

    const currentPreview = imagesCopy.find((image) => image.isPreview);

    if (Boolean(currentPreview)) {
      const currentPreviewIndex = imagesCopy.indexOf(currentPreview!);
      imagesCopy.splice(currentPreviewIndex, 1, { ...currentPreview!, isPreview: false });
    }

    onChange(removeFromArray(imagesCopy, (img) => img.blobId === newImage.blobId, newImage));
  };

  const openDialog = (image: ImageFormContent) => {
    setEditedImage(image);
    setImageFormOpen(true);
  };

  const closeDialog = () => {
    setImageFormOpen(false);
  };

  useEffect(() => {
    if (images.length > 0 && !images.some((image) => image.isPreview)) {
      const copy = images.slice();
      const firstImage = images[0];
      copy.splice(0, 1, { ...firstImage, isPreview: true });
      onChange(copy);
    }
  }, [images, onChange]);

  return (
    <>
      <Stack padding={2}>
        <Stack direction="row">
          <GetImagesButton
            illustration={<GalleryIllustration sx={{ width: 100, height: 100 }} />}
            onClick={() => setSavedImagesOpen(true)}
            subtitle="Wybierz z&nbsp;zapisanych"
          />
        </Stack>
        <Scrollbar sx={{ height: 600 }}>
          <ImageList rowHeight={168} sx={{ margin: 1.5 }}>
            {images.map((imageForm) => {
              const { alt, title, blobId, isPreview } = imageForm;
              return (
                <ImageListItem
                  key={blobId}
                  onClick={() => handleSetPreview(imageForm)}
                  sx={{ cursor: 'pointer' }}
                >
                  <Blob
                    title={title}
                    alt={alt}
                    id={blobId}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      ...(isPreview && { border: `solid 4px ${theme.palette.warning.main}` }),
                    }}
                  />
                  <ImageListItemBar
                    sx={{
                      borderRadius: '0 0 10px 10px',
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    actionIcon={
                      <Tooltip title="Edytuj">
                        <Fab
                          sx={{ margin: 1 }}
                          size="small"
                          onClick={(event) => {
                            event.stopPropagation();
                            openDialog(imageForm);
                          }}
                          color={Boolean(imageForm.alt) ? 'default' : 'warning'}
                        >
                          <EditRoundedIcon />
                        </Fab>
                      </Tooltip>
                    }
                  />
                  <ImageListItemBar
                    position="top"
                    sx={{ backgroundColor: 'transparent' }}
                    actionIcon={
                      <Tooltip title="Usuń">
                        <IconButton
                          sx={{ color: 'black' }}
                          size="medium"
                          onClick={(event) => {
                            event.stopPropagation();
                            onChange(
                              removeFromArray(images, (image) => image.blobId === imageForm.blobId)
                            );
                          }}
                        >
                          <HighlightOffTwoToneIcon />
                        </IconButton>
                      </Tooltip>
                    }
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Scrollbar>
      </Stack>
      <Dialog open={imageFormOpen} onClose={closeDialog}>
        <ImageForm
          initialState={editedImage!}
          onSubmit={(imageForm) => {
            onChange(
              removeFromArray(images, (image) => image.blobId === imageForm.blobId, imageForm)
            );
            closeDialog();
          }}
        />
      </Dialog>
      <Dialog open={savedImagesOpen} onClose={() => setSavedImagesOpen(false)}>
        <BlobsSelect
          onSubmit={(newBlobs) => {
            const uniqueBlobs = newBlobs.filter(
              (blob) => !images.some((image) => image.blobId === blob.id)
            );
            const blobsConverted = arrayMapBlobToImage(uniqueBlobs);
            onChange([...images, ...blobsConverted]);
            setSavedImagesOpen(false);
          }}
        />
      </Dialog>
    </>
  );
};

export { ArticleImageDrop };
