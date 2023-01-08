import { Checkbox } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ImageFormModel } from '../../models/ImageFormModel';

type ControlledCheckBoxProps = {
  control: Control<ImageFormModel, boolean>;
};

const ControlledCheckBox: FC<ControlledCheckBoxProps> = ({ control }) => (
  <Controller
    name="isPreview"
    control={control}
    render={({ field: { onChange, value } }) => <Checkbox checked={value} onChange={onChange} />}
  />
);

export { ControlledCheckBox };
