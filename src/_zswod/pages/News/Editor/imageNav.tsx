import { Alert, Box, Card, Fab, FormHelperText } from '@mui/material';
import { m } from 'framer-motion';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FormState,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import UploadMultiFile from 'src/_zswod/components/UploadMultiFile';
import { ContentState } from '.';

const imagesPicker = {
  minimized: { height: 85, transition: { duration: 0.2 } },
  maximized: { height: 'unset', transition: { duration: 0.17 } },
};

const minimizeFab = {
  minimized: { rigth: 120, transition: { duration: 0.17 } },
  maximized: { right: 50, transition: { duration: 0.17 } },
};

const alertVar = {
  minimized: { top: 15, bottom: 'unset', transition: { duration: 0.17 } },
  maximized: {
    bottom: 25,
    left: '45%',
    top: 'unset',
    transition: { duration: 0.17 },
  },
};

type ImageNavProps = {
  register: UseFormRegister<ContentState>;
  watch: UseFormWatch<ContentState>;
  setValue: UseFormSetValue<ContentState>;
  control: Control<ContentState>;
  formState: FormState<ContentState>;
};

const ImageNav: FC<ImageNavProps> = ({ formState, watch, setValue, control }) => {
  const [minimized, setMinimized] = useState(false);

  const { images } = watch();

  const handleDropMultiFile = (files: File[]) => {
    setValue('images', [
      ...images,
      ...files.map((file: File) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  };

  const handleRemove = (file: File | string) => {
    const filteredItems = images.filter((_file) => _file !== file);
    setValue('images', filteredItems);
  };

  return (
    <m.div
      initial={{
        width: '100%',
        position: 'fixed',
        textAlign: 'center',
        bottom: 0,
        maxHeight: 650,
      }}
      variants={imagesPicker}
      animate={minimized ? 'minimized' : 'maximized'}
    >
      <m.div
        initial={{
          position: 'absolute',
          top: -25,
          width: 60,
          height: 60,
          zIndex: 15,
          right: 120,
        }}
        variants={minimizeFab}
        animate={minimized ? '' : 'maximized'}
      >
        <Fab
          onClick={() => {
            setMinimized(!minimized);
            console.log(minimized);
          }}
        >
          {'_'}
        </Fab>
      </m.div>
      <Box>
        <Card>
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <UploadMultiFile
                files={field.value}
                onDrop={handleDropMultiFile}
                onRemove={handleRemove}
              />
            )}
          />

          {watch().images.length < 1 && (
            <m.div
              animate={minimized ? 'minimized' : 'maximized'}
              variants={alertVar}
              initial={{ position: 'absolute', top: 5, width: 350, left: 'calc(50% - 175px)' }}
            >
              <Alert
                variant={minimized ? 'outlined' : 'standard'}
                severity={minimized ? 'error' : 'warning'}
              >
                Minimalnie jedno zdjęcie jest wymagane
              </Alert>
            </m.div>
          )}
        </Card>
      </Box>
    </m.div>
  );
};

export { ImageNav };
