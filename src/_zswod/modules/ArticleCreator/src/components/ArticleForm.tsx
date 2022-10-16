import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledTextField } from './controls/ControlledTextField';
import { ControlledTextbox } from './controls/ControlledTextbox';

const schema = yup.object().shape({
  title: yup.string().required(),
  short: yup.string().required(),
  content: yup.string().required(),
});

type ArticleFormProps = {
  onSubmit: SubmitHandler<ArticleFormModel>;
  defaultValues: ArticleFormModel;
  renderSubmit: ReactNode;
};

const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, defaultValues, renderSubmit }) => {
  const { control, handleSubmit } = useForm<ArticleFormModel>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <Grid container component="form" onSubmit={handleSubmit(onSubmit)} maxWidth="100%">
      <Grid item xs={6}>
        <ControlledTextField fullWidth label="Tytuł" control={control} name="title" />
      </Grid>
      <Grid item xs={6}>
        <ControlledTextField fullWidth label="Skrót" control={control} name="short" />
      </Grid>
      <Grid item xs={12}>
        <ControlledTextbox control={control} name="content" />
      </Grid>
      {renderSubmit}
    </Grid>
  );
};

export { ArticleForm };
