import {
  Alert,
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import Image from 'src/components/Image';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { upsert } from 'src/_zswod/utils/upsert';
import { GetBlobsResponse, getBlobs, getGetBlobsError } from '../api/getBlobs';
import { ImagesGallery } from './utils/ImagesGallery';

const AMOUNT = 20;

const SavedImages: FC = () => {
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');
  const [blobs, setBlobs] = useState<GetBlobsResponse[]>([]);
  const [eof, setEof] = useState(false);
  const [selectedBlobs, setSelectedBlobs] = useState<GetBlobsResponse[]>([]);

  const blobUrls = useMemo(() => blobs.map(({ url }) => url), [blobs]);

  const handleSelectBlob = (blob: GetBlobsResponse) => {
    console.log(blob);
    setSelectedBlobs((curr) => {
      const index = curr.findIndex((c) => c.url === blob.url);
      if (index !== -1) {
        curr.splice(index, 1);
        return curr;
      }

      return [...curr, blob];
    });
  };

  const fetchBlobs = async () => {
    setStatus('loading');

    try {
      const newBlobs = await getBlobs(AMOUNT, blobs.length);
      setBlobs((curr) => [...curr, ...newBlobs]);
      setStatus('success');
      if (newBlobs.length < AMOUNT) {
        setEof(true);
      }
    } catch (err) {
      setError(getGetBlobsError(err));
      setStatus('error');
    }
  };

  useEffect(() => {
    fetchBlobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'loading') return null;

  if (status === 'error') return <Alert severity="error">{error}</Alert>;

  return (
    <Stack spacing={2} padding={2} minHeight={800}>
      <Box>
        <Typography variant="h5">Galeria</Typography>
        <Typography variant="caption" color={(theme) => theme.palette.grey[600]}>
          Tu znajdują się wszystkie wgrane do serwera obrazy - nawet te które nie pojawiły się w
          artykule. Każdy obraz który wgrywasz najpierw trafia do serwera, poniżej znajduje się
          pełna kolekcja.
        </Typography>
      </Box>
      {/* <ImageList rowHeight={160} cols={3}>
        {blobs.map((blob) => {
          const { name, url } = blob;
          const indexOfBlobInSelected = selectedBlobs.findIndex((sb) => sb.url === url);
          const isSelected = indexOfBlobInSelected > -1;
          return (
            <ImageListItem key={url}>
              <Card
                sx={(theme) => ({
                  ...(isSelected && {
                    boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
                    opacity: 0.8,
                  }),
                })}
              >
                <CardActionArea onClick={() => handleSelectBlob(blob)}>
                  <Image
                    title={name}
                    alt={name}
                    src={url}
                    sx={{
                      objectFit: 'scale-down',
                    }}
                  />
                </CardActionArea>
              </Card>
            </ImageListItem>
          );
        })}
      </ImageList> */}

      <ImagesGallery imageUrls={blobs.map(({ url }) => url)} />
      {!eof && (
        <Button variant="contained" onClick={fetchBlobs}>
          Wczytaj więcej
        </Button>
      )}
    </Stack>
  );
};

export { SavedImages };
