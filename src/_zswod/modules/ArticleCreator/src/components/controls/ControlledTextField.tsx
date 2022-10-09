import { TextField } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type ControlledTextFieldProps<TFormModel extends FieldValues> = {
  name: Path<TFormModel>;
  control: Control<TFormModel, string>;
  label: string;
};

const ControlledTextField = <TFormModel extends FieldValues>({
  control,
  name,
  label,
}: ControlledTextFieldProps<TFormModel>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: fieldProps }) => <TextField {...fieldProps} label={label} />}
  />
);

export { ControlledTextField };
