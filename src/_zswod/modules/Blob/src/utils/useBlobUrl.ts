import { useSelector } from 'react-redux';
import { selectBackendUrl } from 'src/_zswod/modules/Config';

const useBlobUrl = () => {
  const baseUrl = useSelector(selectBackendUrl);

  const getUrl = (blobId: string) => `${baseUrl}/blob/${blobId}`;

  return { getUrl };
};

export { useBlobUrl };
