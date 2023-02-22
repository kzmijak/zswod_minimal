import { BoxProps } from '@mui/material';
import { FC } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import Image from 'src/components/Image';
import { selectBlobById } from '../slice/selectors';
import { useBlobUrl } from '../utils/useBlobUrl';

type BlobProps = Omit<BoxProps & LazyLoadImageProps, 'id' | 'src'> & {
  id: string;
};

const Blob: FC<BlobProps> = ({ id, ...rest }) => {
  const { getUrl } = useBlobUrl();
  const blob = useSelector(selectBlobById(id));

  return <Image {...rest} title={blob?.title} alt={blob?.alt} src={getUrl(id)} />;
};

export { Blob };
