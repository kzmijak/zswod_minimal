import { BoxProps } from '@mui/material';
import { FC } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import Image from 'src/components/Image';
import { selectBackendUrl } from 'src/_zswod/modules/Config/src/slice/selectors';
import { selectBlobById } from '../slice/selectors';

type BlobProps = Omit<BoxProps & LazyLoadImageProps, 'id' | 'src'> & {
  id: string;
};

const Blob: FC<BlobProps> = ({ id, ...rest }) => {
  const baseUrl = useSelector(selectBackendUrl);
  const blob = useSelector(selectBlobById(id));

  return <Image {...rest} title={blob?.title} alt={blob?.alt} src={`${baseUrl}/blob/${id}`} />;
};

export { Blob };
