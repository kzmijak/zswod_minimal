import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

type GetBlobsResponse = {
  url: string;
  name: string;
};

const getBlobsErrorConsts = ['ErrCouldNotQuery', 'Unknown'] as const;
type GetBlobsError = typeof getBlobsErrorConsts[number];
const getBlobsErrorDisplayValueDict: Record<GetBlobsError, string> = {
  ErrCouldNotQuery: 'Nie udało się pozyskać obrazów',
  Unknown: 'Coś poszło nie tak',
};

const getBlobs = async (amount?: number, offset?: number) => {
  const response = await api.get<GetBlobsResponse[]>('blob', { params: { amount, offset } });

  return response.data;
};

const getGetBlobsError = (err: any) => {
  const error = mapRequestError<GetBlobsError>(err, getBlobsErrorConsts, 'Unknown');

  return getBlobsErrorDisplayValueDict[error];
};

export { getBlobs, getGetBlobsError };
export type { GetBlobsResponse };
