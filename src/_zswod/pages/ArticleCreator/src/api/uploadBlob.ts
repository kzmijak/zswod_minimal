import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

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

const uploadBlob = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post<string>('blob', formData);

  return response.data;
};

const getUploadBlobError = (err: any) => {
  const error = mapRequestError<UploadBlobError>(err, uploadBlobErrorConsts, 'Unknown');

  return uploadBlobErrorDisplayValueDict[error];
};

export { uploadBlob, getUploadBlobError };
