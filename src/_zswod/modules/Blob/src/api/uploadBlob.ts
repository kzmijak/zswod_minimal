import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { BlobDto } from '../../../../models/Blob/src/BlobDto';
import { arrayMapBlobDtoToModel } from 'src/_zswod/models/Blob';

const uploadBlobErrorConsts = [
  'ErrInvalidFile',
  'ErrFileTooLarge',
  'ErrFileOpenFailed',
  'ErrFileReadFailed',
  'ErrCouldNotSaveToDb',
  'Unknown',
] as const;
type UploadBlobError = typeof uploadBlobErrorConsts[number];
const uploadBlobErrorDisplayValueDict: Record<UploadBlobError, string> = {
  ErrCouldNotSaveToDb: 'Nie udało się zapisać obrazu do bazy danych',
  ErrFileOpenFailed: 'Nie udało się otworzyć pliku',
  ErrFileReadFailed: 'Nie udało się odczytać zawartości pliku',
  ErrFileTooLarge: 'Plik jest zbyt duży',
  ErrInvalidFile: 'Plik jest niepoprawny',
  Unknown: 'Coś poszło nie tak',
};

const uploadBlobs = async (file: File[]) => {
  const formData = new FormData();

  file.forEach((file) => {
    formData.append('files[]', file);
  });

  const response = await api.post<BlobDto[]>('blob', formData);

  return arrayMapBlobDtoToModel(response.data);
};

const getUploadBlobError = (err: any) => {
  const error = mapRequestError<UploadBlobError>(err, uploadBlobErrorConsts, 'Unknown');

  return uploadBlobErrorDisplayValueDict[error];
};

export { uploadBlobs, getUploadBlobError };
