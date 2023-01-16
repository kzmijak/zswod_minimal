import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ImageFormContent } from '../models/ImageFormContent';
import { nullImageFormObject } from '../models/nullImageFormObject';

const schema = yup.object().shape({
  title: yup.string().required(),
  alt: yup.string().required(),
  isPreview: yup.bool().required(),
});

type ImageFormProps = {
  initialState?: ImageFormContent;
  onSubmit: SubmitHandler<ImageFormContent>;
};

const ImageForm: FC<ImageFormProps> = ({ initialState = nullImageFormObject, onSubmit }) => {
  const { register, handleSubmit } = useForm<ImageFormContent>({
    defaultValues: initialState,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('title')} label="Nazwa" name="title" />
      <TextField {...register('alt')} label="Tekst alternatywny" name="alt" />
      <Button type="submit">Zatwierdź</Button>
    </Stack>
  );
};

export { ImageForm };
