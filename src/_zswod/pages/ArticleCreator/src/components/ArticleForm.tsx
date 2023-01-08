import { Grid, Stack } from '@mui/material';
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
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} height="100%" spacing={1} margin={1}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <ControlledTextField fullWidth label="Tytuł" control={control} name="title" />
        </Grid>
        <Grid item xs={9}>
          <ControlledTextField fullWidth label="Skrót" control={control} name="short" />
        </Grid>
      </Grid>
      <Stack height="100%">
        <ControlledTextbox control={control} name="content" label="Treść artykułu" height="100%" />
      </Stack>
      {renderSubmit}
    </Stack>
  );
};

export { ArticleForm };
