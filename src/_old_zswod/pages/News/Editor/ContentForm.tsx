import { Grid, TextField, Box, Typography, Paper } from '@mui/material';
import { FC } from 'react';
import { Control, Controller, FormState, UseFormRegister, UseFormWatch } from 'react-hook-form';
import QuillEditor from 'src/_old_zswod/components/editor/quill';
import Markdown from 'src/_old_zswod/components/Markdown';
import { ContentState } from '.';

type ContentFormProps = {
  register: UseFormRegister<ContentState>;
  watch: UseFormWatch<ContentState>;
  formState: FormState<ContentState>;
  control: Control<ContentState>;
};

const ContentForm: FC<ContentFormProps> = ({ watch, register, formState, control }) => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <TextField
        {...register('title')}
        error={Boolean(formState.errors.title)}
        helperText={formState.errors?.title?.message}
        fullWidth
        label="Tytuł"
      />
    </Grid>
    <Grid item xs={8}>
      <TextField
        {...register('short')}
        error={Boolean(formState.errors.short)}
        helperText={formState.errors?.short?.message}
        fullWidth
        label="Zapowiedź"
      />
    </Grid>

    <Grid item xs={6}>
      <Controller
        name="content"
        control={control}
        render={({ field, fieldState }) => (
          <QuillEditor
            id="hook-content"
            value={field.value}
            onChange={field.onChange}
            error={Boolean(fieldState.error)}
            sx={{ minHeight: 800 }}
          />
        )}
      />
    </Grid>
    <Grid item xs={6}>
      <Box sx={{ minHeight: 800 }}>
        <Typography variant="h5" sx={{ mb: 5 }}>
          Podgląd
        </Typography>

        <Paper variant="outlined" sx={{ minHeight: 730, padding: 3 }}>
          <Markdown children={watch().content} />
        </Paper>
      </Box>
    </Grid>
  </Grid>
);

export { ContentForm };
