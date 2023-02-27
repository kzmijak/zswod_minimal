import {
  createArrayMapper,
  createDisplayValueGetter,
  createEnumMapper,
} from 'src/_zswod/utils/mapperCreators';
import { UserRole, userRoleConsts, userRoleDisplayValueDict } from './enums/UserRole';
import { UserDto } from './UserDto';
import { UserModel } from './UserModel';

const mapStringToRole = createEnumMapper<UserRole>(userRoleConsts, 'Unknown');
const getUserRoleDisplayValue = createDisplayValueGetter(userRoleDisplayValueDict);

const mapUserDtoToModel = ({ id, role }: UserDto): UserModel => ({
  id,
  role: mapStringToRole(role),
});

const arrayMapUserDtoToModel = createArrayMapper(mapUserDtoToModel);

export { mapStringToRole, getUserRoleDisplayValue, mapUserDtoToModel, arrayMapUserDtoToModel };
