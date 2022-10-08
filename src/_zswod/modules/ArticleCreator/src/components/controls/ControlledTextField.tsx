import { TextField } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ArticleFormModel } from '../../models/ArticleFormModel';

type ControlledTextFieldProps = {
  name: keyof ArticleFormModel;
  control: Control<ArticleFormModel, string>;
  label: string;
};

const ControlledTextField: FC<ControlledTextFieldProps> = ({ control, name, label }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: fieldProps }) => <TextField {...fieldProps} label={label} />}
  />
);

export { ControlledTextField };
