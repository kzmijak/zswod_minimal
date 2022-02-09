import { Grid, TextField, Box, Typography, Paper } from '@mui/material';
import { FC, useEffect } from 'react';
import { FormState, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import QuillEditor from 'src/_zswod/components/editor/quill';
import Markdown from 'src/_zswod/components/Markdown';
import { ContentState } from '.';

type ContentFormProps = {
  register: UseFormRegister<ContentState>;
  watch: UseFormWatch<ContentState>;
  setValue: UseFormSetValue<ContentState>;
  formState: FormState<ContentState>;
};

const ContentForm: FC<ContentFormProps> = ({ watch, register, setValue, formState }) => {
  const content = watch('content');
  const onContentChange = (content: string) => {
    setValue('content', content, { shouldValidate: true });
  };

  useEffect(() => {
    register('title', { required: true });
    register('short', { required: true });
    register('content', { required: true });
    console.log(register);
  }, [register]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          {...register('title', { required: true })}
          error={formState.errors.title !== undefined}
          fullWidth
          required
          label="Tytuł"
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          {...register('short', { required: true, minLength: 2 })}
          error={Boolean(formState.errors.short)}
          fullWidth
          required
          label="Zapowiedź"
        />
      </Grid>

      <Grid item xs={6}>
        <QuillEditor
          error={formState.errors.content !== undefined}
          value={content}
          onChange={onContentChange}
          sx={{ minHeight: 800 }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ minHeight: 800 }}>
          <Typography variant="h5" sx={{ mb: 5 }}>
            Podgląd
          </Typography>

          <Paper variant="outlined" sx={{ minHeight: 730, padding: 3 }}>
            <Markdown children={content} />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export { ContentForm };
