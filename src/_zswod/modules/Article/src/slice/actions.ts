import { createAsyncThunk } from '@reduxjs/toolkit';
import { mapArticleDtoToModel, ArticleDto } from 'src/_zswod/models/Article';
import { api } from 'src/_zswod/modules/Axios';

const fetchArticle = createAsyncThunk('article/fetch', async (articleName: string) => {
  const response = await api.get<ArticleDto[]>('articles', {
    params: { articleName },
  });

  return mapArticleDtoToModel(response.data[0]);
});

export { fetchArticle };
