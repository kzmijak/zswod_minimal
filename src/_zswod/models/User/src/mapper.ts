import {
  createArrayMapper,
  createDisplayValueGetter,
  createEnumMapper,
} from 'src/_zswod/utils/mapperCreators';
import { mapImageDtoToModel } from '../../Image';
import { UserRole, userRoleConsts, userRoleDisplayValueDict } from './enums/UserRole';
import { UserDto } from './UserDto';
import { UserModel } from './UserModel';

const mapStringToRole = createEnumMapper<UserRole>(userRoleConsts, 'Unknown');
const getUserRoleDisplayValue = createDisplayValueGetter(userRoleDisplayValueDict);

const mapUserDtoToModel = ({
  id,
  role,
  avatar,
  email,
  firstName,
  lastName,
}: UserDto): UserModel => ({
  id,
  role: mapStringToRole(role),
  avatar: Boolean(avatar) ? mapImageDtoToModel(avatar!) : undefined,
  email,
  firstName,
  lastName,
});

const arrayMapUserDtoToModel = createArrayMapper(mapUserDtoToModel);

export { mapStringToRole, getUserRoleDisplayValue, mapUserDtoToModel, arrayMapUserDtoToModel };
