import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { arrayMapArticleHeaderDtoToModel, ArticleHeaderDto } from 'src/_zswod/models/ArticleHeader';
import { config } from 'src/_zswod/modules/config';

const {
  backend: { baseURL },
} = config;

const fetch = createAsyncThunk('articleHeaders/fetch', async () => {
  const response = await axios.get<ArticleHeaderDto[]>('articles', { baseURL });
  return arrayMapArticleHeaderDtoToModel(response.data);
});

export { fetch };
