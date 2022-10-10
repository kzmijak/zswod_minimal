import { FC } from 'react';
import { ImageDrop } from 'src/_zswod/modules/ImageDrop';
import { isArray } from 'lodash';
import { ImageFormModel } from '../../models/ImageFormModel';
import { nullImageFormObject } from '../../models/nullImageFormObject';
import { createArrayMapper } from 'src/_zswod/utils/createArrayMapper';

const convertFileToImage = (file: File): ImageFormModel => ({
  ...nullImageFormObject,
  title: file.name,
});

const arrayConvertFileToImage = createArrayMapper(convertFileToImage);

type ArticleImageDropProps = {
  images: ImageFormModel[];
  onChange: (newArray: ImageFormModel[]) => void;
};

const ArticleImageDrop: FC<ArticleImageDropProps> = ({ images, onChange }) => {
  const removeDuplicates = (drop: ImageFormModel[], existingArray: ImageFormModel[]) =>
    drop.filter((image) => {
      const duplicates = existingArray.find((img) => img.title === image.title);
      return !Boolean(duplicates);
    });

  const handleRemove = (index: number) => {
    const imagesCopy = images.slice();
    imagesCopy.splice(index, 1);
    onChange(imagesCopy);
  };

  const handleDrop = (result: File[] | File) => {
    const dropAsArray = isArray(result) ? result : [result];
    const imagesFromFiles = arrayConvertFileToImage(dropAsArray);
    const cleanDrop = removeDuplicates(imagesFromFiles, images);
    onChange([...images, ...cleanDrop]);
  };

  return (
    <ImageDrop
      images={images.map((image) => image.url)}
      onDrop={handleDrop}
      onRemove={handleRemove}
    />
  );
};

export { ArticleImageDrop };
