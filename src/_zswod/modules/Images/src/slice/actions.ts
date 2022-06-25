import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { arrayMapImageDtoToModel, ImageDto } from 'src/_zswod/models/Image';
import { config } from 'src/_zswod/modules/config';

const {
  backend: { baseURL },
} = config;

const fetchImages = createAsyncThunk('images/fetch', async () => {
  const result = await axios.get<ImageDto[]>('images', { baseURL });

  return arrayMapImageDtoToModel(result.data);
});

export { fetchImages };
