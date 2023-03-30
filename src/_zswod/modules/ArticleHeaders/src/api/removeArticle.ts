import { api } from 'src/_zswod/modules/Axios';

type ArticleId = string;

const removeArticle = async (articleId: string) => {
  const response = await api.delete<ArticleId>(`/article/${articleId}`);
  return response.data;
};

export { removeArticle };
