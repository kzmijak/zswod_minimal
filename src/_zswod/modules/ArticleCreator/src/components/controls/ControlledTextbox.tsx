import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Editor } from 'src/_zswod/modules/Quill';

type ControlledTextboxProps<TFormModel extends FieldValues> = {
  name: Path<TFormModel>;
  control: Control<TFormModel, string>;
};

const ControlledTextbox = <TFormModel extends FieldValues>({
  control,
  name,
}: ControlledTextboxProps<TFormModel>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => <Editor value={value} onChange={onChange} />}
  />
);

export { ControlledTextbox };
