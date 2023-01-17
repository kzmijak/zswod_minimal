import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, TextField } from '@mui/material';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ImageFormContent } from '../models/ImageFormContent';
import { nullImageFormObject } from '../models/nullImageFormObject';

const schema = yup.object().shape({
  title: yup.string().required(),
  alt: yup.string().required(),
  order: yup.number().required(),
  isPreview: yup.bool().required(),
});

type ImageFormProps = {
  initialState?: ImageFormContent;
  onSubmit: SubmitHandler<ImageFormContent>;
};

const ImageForm: FC<ImageFormProps> = ({ initialState = nullImageFormObject, onSubmit }) => {
  const { register, handleSubmit, watch } = useForm<ImageFormContent>({
    defaultValues: initialState,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  useEffect(() => {
    const subscription = watch((formContent) => {
      onSubmit(formContent as ImageFormContent);
    });

    return subscription.unsubscribe;
  }, [onSubmit, watch]);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('title')} label="Nazwa" name="title" />
      <TextField {...register('alt')} label="Tekst alternatywny" name="alt" />
      <TextField
        {...register('order', { valueAsNumber: true })}
        type="number"
        label="Kolejność"
        name="order"
      />
    </Stack>
  );
};

export { ImageForm };
