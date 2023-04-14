import { CustomPageDto, mapCustomPageDtoToModel } from 'src/_zswod/models/CustomPage';
import { api } from 'src/_zswod/modules/Axios';

const updateCustomPage = async (id: string, content: string) => {
  const response = await api.put<CustomPageDto>('customPages', {
    id,
    customPage: { content },
  });

  return mapCustomPageDtoToModel(response.data);
};

export { updateCustomPage };
