import { FC, useState } from 'react';
import { ImageFormContent } from '../models/ImageFormContent';
import {
  Dialog,
  Fab,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  useTheme,
} from '@mui/material';
import { ImageForm } from './ImageForm';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { GalleryIllustration } from '../assets/illustration_gallery';
import { GetImagesButton } from './utils/GetImagesButton';
import { Blob, BlobsSelect } from 'src/_zswod/modules/Blob';
import Scrollbar from 'src/components/Scrollbar';

const replaceImage = (array: ImageFormContent[], image: ImageFormContent) => {
  const arrayCopy = array.slice();
  const index = arrayCopy.findIndex((img) => img.blobId === image.blobId);
  arrayCopy.splice(index, 1, image);
  return arrayCopy;
};

type ArticleImageDropProps = {
  images: ImageFormContent[];
  onChange: (newArray: ImageFormContent[]) => void;
};

const ArticleImageDrop: FC<ArticleImageDropProps> = ({ images, onChange }) => {
  const [savedImagesOpen, setSavedImagesOpen] = useState(false);
  const [imageFormOpen, setImageFormOpen] = useState(false);
  const [editedImage, setEditedImage] = useState<ImageFormContent | null>(null);
  const theme = useTheme();

  const openDialog = (image: ImageFormContent) => {
    setEditedImage(image);
    setImageFormOpen(true);
  };

  const closeDialog = () => {
    setImageFormOpen(false);
  };

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
                <ImageListItem key={blobId}>
                  <Blob
                    title={title}
                    alt={alt}
                    id={blobId}
                    onClick={() => {
                      const newImage = { ...imageForm, isPreview: !isPreview };

                      onChange(replaceImage(images, newImage));
                    }}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      cursor: 'pointer',
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
                      <Fab
                        sx={{ margin: 1 }}
                        size="small"
                        onClick={() => {
                          openDialog(imageForm);
                        }}
                        color={Boolean(imageForm.alt) ? 'default' : 'warning'}
                      >
                        <EditRoundedIcon />
                      </Fab>
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
            onChange(replaceImage(images, imageForm));
            closeDialog();
          }}
        />
      </Dialog>
      <Dialog open={savedImagesOpen} onClose={() => setSavedImagesOpen(false)}>
        <BlobsSelect onSubmit={(newBlobs) => {}} />
      </Dialog>
    </>
  );
};

export { ArticleImageDrop };
