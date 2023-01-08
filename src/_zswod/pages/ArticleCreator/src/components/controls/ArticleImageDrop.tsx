import { FC } from 'react';
import { ImageDrop } from 'src/_zswod/modules/ImageDrop';
import { isArray } from 'lodash';
import { ImageFormModel } from '../../models/ImageFormModel';
import { nullImageFormObject } from '../../models/nullImageFormObject';
import { toBase64 } from 'src/_zswod/modules/ImageDrop/src/utils/toBase64';

const convertFileToImage = async (file: File): Promise<ImageFormModel> => {
  const url = await toBase64(file);

  return {
    ...nullImageFormObject,
    title: file.name,
    url,
  };
};

const arrayConvertFileToImage = async (files: File[]) => Promise.all(files.map(convertFileToImage));

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

  const handleDrop = async (result: File[] | File) => {
    const dropAsArray = isArray(result) ? result : [result];
    const imagesFromFiles = await arrayConvertFileToImage(dropAsArray);
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