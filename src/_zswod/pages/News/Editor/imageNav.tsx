import { Box, Card, Fab } from '@mui/material';
import { m } from 'framer-motion';
import { FC, useCallback, useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
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

type ImageNavProps = {
  register: UseFormRegister<ContentState>;
  watch: UseFormWatch<ContentState>;
  setValue: UseFormSetValue<ContentState>;
};

const ImageNav: FC<ImageNavProps> = ({ register, watch, setValue }) => {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    register('images', { required: true });
  }, [register]);

  const images = watch('images');

  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setValue('images', [
        ...images,

        ...acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [setValue, images]
  );

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
          <UploadMultiFile files={images} onDrop={handleDropMultiFile} onRemove={handleRemove} />
        </Card>
      </Box>
    </m.div>
  );
};

export { ImageNav };
