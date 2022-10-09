import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ImageDrop } from 'src/_zswod/modules/ImageDrop';
import { ArticleFormModel } from '../../models/ArticleFormModel';
import { isArray } from 'lodash';

type ControlledImageDropProps = {
  control: Control<ArticleFormModel, File>;
};

const ControlledImageDrop: FC<ControlledImageDropProps> = ({ control }) => {
  const removeDuplicates = (drop: File[], existingArray: File[]) =>
    drop.filter((image) => {
      const duplicates = existingArray.find((img) => img.name === image.name);
      return !Boolean(duplicates);
    });

  return (
    <Controller
      name="imageGuids"
      control={control}
      render={({ field: { value: images, onChange } }) => {
        const handleRemove = (index: number) => {
          const imagesCopy = images.slice();
          imagesCopy.splice(index, 1);
          onChange(imagesCopy);
        };

        const handleDrop = (result: File[] | File) => {
          const dropAsArray = isArray(result) ? result : [result];
          const cleanDrop = removeDuplicates(dropAsArray, images);
          onChange([...images, ...cleanDrop]);
        };

        return <ImageDrop images={images} onDrop={handleDrop} onRemove={handleRemove} />;
      }}
    />
  );
};

export { ControlledImageDrop };
