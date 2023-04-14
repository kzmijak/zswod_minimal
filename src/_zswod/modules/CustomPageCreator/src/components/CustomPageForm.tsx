import { FC } from 'react';
import { iconConsts } from 'src/_zswod/models/enums/Icon/src/Icon';
import * as yup from 'yup';
import { CustomPageFormContent, nullCustomPageFormContent } from '../models/CustomPageFormContent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { ControlledIconSelect } from './controls/ControlledIconSelect';
import SendIcon from '@mui/icons-material/Send';
import { ErrorSocket } from 'src/_zswod/components/ErrorSocket';

const schema = yup.object().shape({
  iconId: yup
    .string()
    .required()
    .oneOf([...iconConsts]),
  section: yup.string().required('Wymagane').min(3, 'Min. 3 znaki').max(36, 'Maks. 36 znaków'),
  title: yup.string().required('Wymagane').min(3, 'Min. 3 znaki').max(36, 'Maks. 36 znaków'),
});

type CustomPageFormProps = {
  initialValues?: Partial<CustomPageFormContent>;
  onSubmit: (formContent: CustomPageFormContent) => void;
};
const CustomPageForm: FC<CustomPageFormProps> = ({ initialValues, onSubmit }) => {
  const defaultValues = { ...nullCustomPageFormContent, ...initialValues };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="row"
      padding={2}
      spacing={1}
      overflow="hidden"
    >
      <ControlledIconSelect control={control} />
      <ErrorSocket message={errors.section?.message}>
        <TextField
          disabled
          {...register('section')}
          label="Sekcja"
          error={Boolean(errors.section?.message)}
        />
      </ErrorSocket>
      <ErrorSocket message={errors.title?.message}>
        <TextField
          autoFocus
          {...register('title')}
          label="Tytuł"
          error={Boolean(errors.title?.message)}
        />
      </ErrorSocket>
      <Button size="small" startIcon={<SendIcon />} type="submit" variant="contained">
        Utwórz
      </Button>
    </Stack>
  );
};

export { CustomPageForm };
