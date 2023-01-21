import { FC, useState } from 'react';
import { ImageDrop } from 'src/_zswod/modules/ImageDrop';
import { isArray } from 'lodash';
import { ImageFormContent } from '../../models/ImageFormContent';
import { nullImageFormObject } from '../../models/nullImageFormObject';
import { uploadBlob } from '../../api/uploadBlob';
import {
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from '@mui/material';
import { ImageForm } from '../ImageForm';
import { UploadIllustration } from '../../assets/illustration_upload';
import Image from 'src/components/Image';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { GalleryIllustration } from '../../assets/illustration_gallery';
import { SavedImages } from '../SavedImages';

const convertFileToImage = async (file: File, order: number): Promise<ImageFormContent> => {
  const url = await uploadBlob(file);

  return {
    ...nullImageFormObject,
    title: file.name,
    order,
    url,
  };
};

const arrayConvertFileToImage = async (files: File[], startingOrder: number) =>
  Promise.all(files.map((file, index) => convertFileToImage(file, index + startingOrder)));

type ArticleImageDropProps = {
  images: ImageFormContent[];
  onChange: (newArray: ImageFormContent[]) => void;
};

const ArticleImageDrop: FC<ArticleImageDropProps> = ({ images, onChange }) => {
  const [savedImagesOpen, setSavedImagesOpen] = useState(false);
  const [imageFormOpen, setImageFormOpen] = useState(false);
  const [editedImage, setEditedImage] = useState<ImageFormContent | null>(null);

  const openDialog = (image: ImageFormContent) => {
    setEditedImage(image);
    setImageFormOpen(true);
  };

  const closeDialog = () => {
    setImageFormOpen(false);
  };

  const removeDuplicates = (drop: ImageFormContent[], existingArray: ImageFormContent[]) =>
    drop.filter((image) => {
      const duplicates = existingArray.find((img) => img.title === image.title);
      return !Boolean(duplicates);
    });

  const handleRemove = (index: number) => {
    const imagesCopy = images.slice();
    imagesCopy.splice(index, 1);
    onChange(imagesCopy);
  };

  const handleDrop = async (result: File[] | File) => {
    const dropAsArray = isArray(result) ? result : [result];
    const imagesFromFiles = await arrayConvertFileToImage(dropAsArray, images.length);
    const cleanDrop = removeDuplicates(imagesFromFiles, images);

    onChange([...images, ...cleanDrop]);
  };

  return (
    <>
      <Stack padding={2}>
        <ImageList rowHeight={168}>
          <ImageDrop
            illustration={<UploadIllustration sx={{ width: 100, height: 100 }} />}
            onDrop={handleDrop}
            onRemove={handleRemove}
            subtitle="Wybierz z&nbsp;dysku"
          />
          <ImageDrop
            illustration={<GalleryIllustration sx={{ width: 100, height: 100 }} />}
            onClick={() => setSavedImagesOpen(true)}
            subtitle="Wybierz z&nbsp;zapisanych"
          />
          {images
            .sort((a, b) => a.order - b.order)
            .map((imageForm) => {
              const { alt, title, url } = imageForm;
              return (
                <ImageListItem key={url}>
                  <Image
                    title={title}
                    alt={alt}
                    src={url}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
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
                      <IconButton
                        onClick={() => {
                          openDialog(imageForm);
                        }}
                        color={Boolean(imageForm.alt) ? 'default' : 'warning'}
                      >
                        <EditRoundedIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
        </ImageList>
      </Stack>
      <Dialog open={imageFormOpen} onClose={closeDialog}>
        <ImageForm
          initialState={editedImage!}
          onSubmit={(imageForm) => {
            const existingImageIndex = images.findIndex((image) => image.url === imageForm.url);
            const imagesCopy = images.slice();
            imagesCopy.splice(existingImageIndex, 1, imageForm);
            closeDialog();
            onChange(imagesCopy);
          }}
        />
      </Dialog>
      <Dialog open={savedImagesOpen} onClose={() => setSavedImagesOpen(false)}>
        <SavedImages />
      </Dialog>
    </>
  );
};

export { ArticleImageDrop };
