import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayMapArticleHeaderDtoToModel, ArticleHeaderDto } from 'src/_zswod/models/ArticleHeader';
import { api } from 'src/_zswod/modules/Axios';

const fetch = createAsyncThunk('articleHeaders/fetch', async () => {
  const response = await api.get<ArticleHeaderDto[]>('article');
  return arrayMapArticleHeaderDtoToModel(response.data);
});

export { fetch };
