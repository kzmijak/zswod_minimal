import {
  arrayMapCustomPageHeaderDtoToModel,
  CustomPageHeaderDto,
} from 'src/_zswod/models/CustomPageHeader';
import { api } from 'src/_zswod/modules/Axios';

const fetchCustomPageHeaders = async () => {
  const response = await api.get<CustomPageHeaderDto[]>('customPages');

  return arrayMapCustomPageHeaderDtoToModel(response.data);
};

export { fetchCustomPageHeaders };
