import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ImageDrop } from 'src/_zswod/modules/ImageDrop';
import { ArticleFormModel } from '../../models/ArticleFormModel';
import { isArray } from 'lodash';

type ControlledImageDropProps = {
  control: Control<ArticleFormModel, File>;
};

const ControlledImageDrop: FC<ControlledImageDropProps> = ({ control }) => (
  <Controller
    name="imageGuids"
    control={control}
    render={({ field: { value: images, onChange } }) => (
      <ImageDrop
        images={images}
        onDrop={(result) => onChange([...images, ...(isArray(result) ? result : [result])])}
        onRemove={(result) => onChange(images.slice(images.indexOf(result), 1))}
      />
    )}
  />
);

export { ControlledImageDrop };
