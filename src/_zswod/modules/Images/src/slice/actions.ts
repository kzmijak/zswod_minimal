import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayMapImageDtoToModel, ImageDto } from 'src/_zswod/models/Image';
import { api } from 'src/_zswod/modules/Axios';

const fetchImages = createAsyncThunk('images/fetch', async () => {
  const result = await api.get<ImageDto[]>('articles/images');

  return arrayMapImageDtoToModel(result.data);
});

export { fetchImages };
