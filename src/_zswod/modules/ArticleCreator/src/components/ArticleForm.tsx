import { Button, Paper } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledTextField } from './controls/ControlledTextField';

const schema = yup.object().shape({
  title: yup.string().required(),
  short: yup.string().required(),
  content: yup.string().required(),
});

type ArticleFormProps = {
  onSubmit?: SubmitHandler<ArticleFormModel>;
  defaultValues: ArticleFormModel;
};

const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm<ArticleFormModel>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <Paper component="form" onSubmit={Boolean(onSubmit) ? handleSubmit(onSubmit!) : undefined}>
      <ControlledTextField label="Tytuł" control={control} name="title" />
      <ControlledTextField label="Skrót" control={control} name="short" />
      <ControlledTextField label="Zawartość" control={control} name="content" />
      <Button type="submit">Zatwierdź</Button>
    </Paper>
  );
};

export { ArticleForm };
