import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mapArticleDtoToModel, ArticleDto } from 'src/_zswod/models/Article';
import { config } from 'src/_zswod/modules/config';

const { baseURL } = config.backend;

const fetchArticle = createAsyncThunk('article/fetch', async (articleName: string) => {
  const response = await axios.get<ArticleDto[]>('articles', {
    params: { articleName },
    baseURL,
  });

  return mapArticleDtoToModel(response.data[0]);
});

export { fetchArticle };
