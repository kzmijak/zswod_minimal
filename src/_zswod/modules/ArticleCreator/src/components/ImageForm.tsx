import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ImageFormModel } from '../models/ImageFormModel';
import { nullImageFormObject } from '../models/nullImageFormObject';
import { ControlledCheckBox } from './controls/ControlledCheckBox';
import { ControlledTextField } from './controls/ControlledTextField';

const schema = yup.object().shape({
  name: yup.string().required(),
  alt: yup.string().required(),
  isPreview: yup.bool().required(),
});

type ImageFormProps = {
  initialState?: ImageFormModel;
};

const ImageForm: FC<ImageFormProps> = ({ initialState = nullImageFormObject }) => {
  const { control, handleSubmit } = useForm<ImageFormModel>({
    defaultValues: initialState,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const submitHandler: SubmitHandler<ImageFormModel> = (data) => {
    console.log({ data });
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(submitHandler)}>
      <ControlledTextField control={control} label="Nazwa" name="title" />
      <ControlledTextField control={control} label="Tekst alternatywny" name="alt" />
      <ControlledCheckBox control={control} />
      <Button type="submit">Zatwierdź</Button>
    </Stack>
  );
};

export { ImageForm };
