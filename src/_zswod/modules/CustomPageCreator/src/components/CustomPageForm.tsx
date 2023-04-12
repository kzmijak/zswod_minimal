import { FC } from 'react';
import { iconConsts } from 'src/_zswod/models/enums/Icon/src/Icon';
import * as yup from 'yup';
import { CustomPageFormContent, nullCustomPageFormContent } from '../models/CustomPageFormContent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { ControlledIconSelect } from './controls/ControlledIconSelect';

const schema = yup.object().shape({
  iconId: yup
    .string()
    .required()
    .oneOf([...iconConsts]),
  section: yup.string().required().min(3).max(12),
  title: yup.string().required().min(3).max(12),
});

type CustomPageFormProps = {
  initialValues?: CustomPageFormContent;
  onSubmit: (formContent: CustomPageFormContent) => void;
};
const CustomPageForm: FC<CustomPageFormProps> = ({
  initialValues = nullCustomPageFormContent,
  onSubmit,
}) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <ControlledIconSelect control={control} />
      <TextField {...register('section')} variant="standard" label="Sekcja" />
      <TextField {...register('title')} label="Tytuł" />
      <Button type="submit">Utwórz</Button>
    </Stack>
  );
};

export { CustomPageForm };
