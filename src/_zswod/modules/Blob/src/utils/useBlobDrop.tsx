import { useDropzone } from 'react-dropzone';
import { uploadBlobsAsyncThunk } from '../slice/thunks';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectDropBlobs } from '../slice/selectors';

const useBlobDrop = (dropId: string) => {
  const dispatch = useAppDispatch();

  const drops = useSelector(selectDropBlobs(dropId));

  const handleDrop = async (files: File[]) => {
    dispatch(uploadBlobsAsyncThunk({ files, dropId }));
  };

  const dropzoneProps = useDropzone({
    multiple: true,
    onDrop: handleDrop,
  });

  return { drops, ...dropzoneProps };
};

export { useBlobDrop };
