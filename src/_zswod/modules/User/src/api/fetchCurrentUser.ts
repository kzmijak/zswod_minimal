import { mapUserDtoToModel, UserDto } from 'src/_zswod/models/User';
import { api } from 'src/_zswod/modules/Axios';

const fetchCurrentUser = async () => {
  const response = await api.get<UserDto>('users/current');
  return mapUserDtoToModel(response.data);
};

export { fetchCurrentUser };
