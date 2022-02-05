import { Box, Card } from '@mui/material';
import { FC, useCallback } from 'react';
import UploadMultiFile from 'src/_zswod/components/UploadMultiFile';

const ImageNav: FC<{ files: (File | string)[]; setFiles: Function }> = ({ files, setFiles }) => {
  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [setFiles, files]
  );

  const handleRemove = (file: File | string) => {
    const filteredItems = files.filter((_file) => _file !== file);
    setFiles(filteredItems);
  };
  const handleRemoveAll = () => {
    setFiles([]);
  };

  return (
    <Box>
      <Card>
        <UploadMultiFile
          files={files}
          onDrop={handleDropMultiFile}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </Card>
    </Box>
  );
};

export { ImageNav };
