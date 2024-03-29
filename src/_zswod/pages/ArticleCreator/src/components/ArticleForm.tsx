import { Grid, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import * as yup from 'yup';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorSocket } from 'src/_zswod/components/ErrorSocket';
import { Editor } from 'src/_zswod/modules/Quill';

const schema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'Tytuł musi mieć minimum 6 znaków')
    .max(200, 'Tytuł może mieć maksymalnie 200 znaków ')
    .required('Artykuł musi mieć tytuł'),
  short: yup
    .string()
    .min(12, 'Skrót artykułu musi mieć minimum 12 znaków')
    .max(300, 'Skrót artykułu może mieć maksymalnie 300 znaków')
    .required('Skrót artykułu jest wymagany, służy on za zapowiedź'),
  content: yup
    .string()
    .min(10, 'Minimalna treść artykułu zawiera 10 znaków')
    .required('Artykuł nie może być pusty'),
});

type ArticleFormProps = {
  formId?: string;
  onSubmit: SubmitHandler<ArticleFormContent>;
  defaultValues: ArticleFormContent;
};

const ArticleForm: FC<ArticleFormProps> = ({ formId, onSubmit, defaultValues }) => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<ArticleFormContent>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { content } = useWatch({ control });

  return (
    <Stack component="form" id={formId} onSubmit={handleSubmit(onSubmit)} spacing={1} margin={1}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <ErrorSocket message={errors.title?.message}>
            <TextField
              {...register('title')}
              fullWidth
              label="Tytuł"
              name="title"
              error={Boolean(errors.title)}
            />
          </ErrorSocket>
        </Grid>
        <Grid item xs={9}>
          <ErrorSocket message={errors.short?.message}>
            <TextField
              {...register('short')}
              fullWidth
              label="Skrót"
              name="short"
              error={Boolean(errors.short)}
            />
          </ErrorSocket>
        </Grid>
      </Grid>
      <Stack height="100%">
        <ErrorSocket message={errors.content?.message}>
          <Editor
            value={content}
            onChange={(value) => {
              setValue('content', value, { shouldValidate: true });
            }}
            label="Treść artykułu"
            height={'75vh'}
            error={Boolean(errors.content)}
          />
        </ErrorSocket>
      </Stack>
    </Stack>
  );
};

export { ArticleForm };
