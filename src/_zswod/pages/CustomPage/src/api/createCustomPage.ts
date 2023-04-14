import { Icon } from 'src/_zswod/models/enums/Icon';
import { api } from 'src/_zswod/modules/Axios';

type CreateCustomPageRequest = {
  iconId: Icon;
  title: string;
  content: string;
  section: string;
};

const createCustomPage = async (body: CreateCustomPageRequest) => {
  const response = await api.post<string>('customPages', body);
  return response.data;
};

export { createCustomPage };
