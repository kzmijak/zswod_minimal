import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField, Typography } from '@mui/material';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'src/components/Image';
import * as yup from 'yup';
import { ImageFormContent } from '../models/ImageFormContent';
import { nullImageFormObject } from '../models/nullImageFormObject';

const schema = yup.object().shape({
  title: yup.string().required(),
  alt: yup.string().required(),
});

type ImageFormProps = {
  initialState?: ImageFormContent;
  onSubmit: (form: ImageFormContent) => void;
};

const ImageForm: FC<ImageFormProps> = ({ initialState = nullImageFormObject, onSubmit }) => {
  const { register, handleSubmit } = useForm<ImageFormContent>({
    defaultValues: initialState,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Stack
      component="form"
      direction="row"
      spacing={1}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ backgroundColor: 'transparent' }}
    >
      <Image src={initialState.url} />
      <Stack
        spacing={3}
        minWidth={300}
        minHeight={400}
        justifyContent="center"
        paddingX={1}
        paddingY={2}
      >
        <Typography variant="h6">Uzupełnij te wartości</Typography>
        <Stack spacing={1}>
          <TextField {...register('title')} autoFocus fullWidth label="Nazwa" name="title" />
          <TextField
            {...register('alt')}
            fullWidth
            label="Tekst alternatywny"
            name="alt"
            helperText="Ta treść nie jest nigdzie wyświetlana, ale wykorzystywana jest przez różne narzędzia korzystające z interfejsu przeglądarki, np. żeby umożliwić nawigację głosową"
          />
        </Stack>
        <Button variant="contained" type="submit">
          Zapisz
        </Button>
      </Stack>
    </Stack>
  );
};

export { ImageForm };
