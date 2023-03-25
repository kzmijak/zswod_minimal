import {
  Box,
  Button,
  Card,
  CardActionArea,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  styled,
} from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectAllBlobs, selectBlobsState } from '../slice/selectors';
import { fetchMoreBlobsAsyncThunk } from '../slice/thunks';
import { BlobModel } from 'src/_zswod/models/Blob';
import Scrollbar from 'src/components/Scrollbar';
import { BlobDrop } from './BlobDrop';
import { useBlobUrl } from '../utils/useBlobUrl';
import Image from 'src/components/Image';

const BoxSelect = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 30,
  height: 30,
  color: theme.palette.primary.contrastText,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

type BlobsSelectProps = {
  onSubmit: (blobs: BlobModel[]) => void;
};

const BlobsSelect: FC<BlobsSelectProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const { status, eof } = useSelector(selectBlobsState);
  const blobs = useSelector(selectAllBlobs);
  const [selectedBlobIds, setSelectedBlobIds] = useState<string[]>([]);
  const { getUrl } = useBlobUrl();

  const blobsComparer = (blobA: BlobModel, blobB: BlobModel) =>
    selectedBlobIds.indexOf(blobA.id) - selectedBlobIds.indexOf(blobB.id);

  const fetchNextBlobsBatch = useCallback(() => {
    dispatch(fetchMoreBlobsAsyncThunk());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'idle') {
      fetchNextBlobsBatch();
    }
  }, [dispatch, fetchNextBlobsBatch, status]);

  const handleSelect = (id: string) => {
    setSelectedBlobIds((currIds) => {
      const currIdsCopy = currIds.slice();
      if (currIdsCopy.includes(id)) {
        currIdsCopy.splice(currIdsCopy.indexOf(id), 1);
        return currIdsCopy;
      }

      return [...currIdsCopy, id];
    });
  };

  const handleSubmit = () => {
    const selectedBlobs = blobs
      .filter((blob) => selectedBlobIds.includes(blob.id))
      .sort(blobsComparer);
    onSubmit(selectedBlobs);
  };

  return (
    <Stack sx={{ width: 600 }}>
      <Scrollbar sx={{ height: 500 }}>
        <Stack>
          <BlobDrop />
          <ImageList cols={3} rowHeight={164}>
            {blobs.map((blob) => {
              const indexInSelected = selectedBlobIds.indexOf(blob.id);
              const isSelected = indexInSelected > -1;

              return (
                <ImageListItem key={blob.id} sx={{ padding: 1 }}>
                  <Card
                    sx={(theme) => ({
                      minHeight: '100%',

                      ...(isSelected && { boxShadow: `0 0 0 3px ${theme.palette.primary.main}` }),
                    })}
                  >
                    <CardActionArea
                      key={blob.id}
                      onClick={() => handleSelect(blob.id)}
                      sx={{ position: 'relative', height: 164 }}
                    >
                      <Stack
                        minWidth="100%"
                        minHeight="100%"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ position: 'absolute', zIndex: 2 }}
                      >
                        {isSelected && <BoxSelect>{indexInSelected + 1}</BoxSelect>}
                      </Stack>
                      <Image
                        src={getUrl(blob.id)}
                        sx={{ zIndex: 1, height: '100%', objectFit: 'cover' }}
                      />
                    </CardActionArea>
                  </Card>
                </ImageListItem>
              );
            })}
          </ImageList>
          {!eof && (
            <Button sx={{ margin: 2 }} variant="contained" onClick={fetchNextBlobsBatch}>
              Wczytaj więcej
            </Button>
          )}
        </Stack>
      </Scrollbar>
      <Divider variant="middle" sx={(theme) => ({ bgcolor: theme.palette.grey[500], margin: 1 })} />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={selectedBlobIds.length === 0}
        sx={{ padding: 3, margin: 2 }}
      >
        Wybierz
      </Button>
    </Stack>
  );
};

export { BlobsSelect };
