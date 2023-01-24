import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { BlobDto } from '../models/BlobDto';
import { arrayMapBlobDtoToModel } from '../models/mapper';

const getBlobsErrorConsts = ['ErrCouldNotQuery', 'Unknown'] as const;
type GetBlobsError = typeof getBlobsErrorConsts[number];
const getBlobsErrorDisplayValueDict: Record<GetBlobsError, string> = {
  ErrCouldNotQuery: 'Nie udało się pozyskać obrazów',
  Unknown: 'Coś poszło nie tak',
};

const getBlobs = async (amount?: number, offset?: number) => {
  const response = await api.get<{ blobs: BlobDto[]; eof: boolean }>('blob', {
    params: { amount, offset },
  });
  const { blobs, eof } = response.data;

  return {
    blobs: arrayMapBlobDtoToModel(blobs),
    eof,
  };
};

const getGetBlobsError = (err: any) => {
  const error = mapRequestError<GetBlobsError>(err, getBlobsErrorConsts, 'Unknown');

  return getBlobsErrorDisplayValueDict[error];
};

export { getBlobs, getGetBlobsError };
