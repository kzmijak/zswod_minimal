import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAxiosLoadableInstance } from 'src/_zswod/utils/AxiosLoadable';
import { Article } from 'src/_zswod/utils/Mock/articles';

const initialState = getAxiosLoadableInstance<Article>();

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getArticlesSuccess(state, action: PayloadAction<Article[]>) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

const articleReducer = slice.reducer;
export { articleReducer, slice };
