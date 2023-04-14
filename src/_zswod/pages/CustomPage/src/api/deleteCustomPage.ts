import { api } from 'src/_zswod/modules/Axios';

const deleteCustomPage = async (id: string) => {
  await api.delete(`customPages/${id}`);
};

export { deleteCustomPage };
