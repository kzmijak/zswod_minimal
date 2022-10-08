import { Button, Paper } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { nullArticleFormObject } from '../models/nullArticleFormObject';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledTextField } from './controls/ControlledTextField';
import { ControlledImageDrop } from './controls/ControlledImageDrop';

const schema = yup.object().shape({
  title: yup.string().required(),
  short: yup.string().required(),
  content: yup.string().required(),
  imageGuids: yup
    .array()
    .of(yup.mixed())
    .test((array) => array!.length > 0),
});

const CreatorForm: FC = () => {
  const { control, handleSubmit } = useForm<ArticleFormModel>({
    mode: 'all',
    defaultValues: nullArticleFormObject,
    resolver: yupResolver(schema),
  });

  const submitHandler: SubmitHandler<ArticleFormModel> = (data) => {
    console.log({ data });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit(submitHandler)}>
      <ControlledTextField label="Tytuł" control={control} name="title" />
      <ControlledTextField label="Skrót" control={control} name="short" />
      <ControlledTextField label="Zawartość" control={control} name="content" />
      <ControlledImageDrop control={control} />
      <Button type="submit">Zatwierdź</Button>
    </Paper>
  );
};

export { CreatorForm };
