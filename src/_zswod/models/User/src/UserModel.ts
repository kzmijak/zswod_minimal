import { ImageModel } from '../../Image';
import { UserRole } from './enums/UserRole';

type UserModel = {
  id: string;
  role: UserRole;
  email: string;
  firstName: string | undefined;
  lastName: string | undefined;
  avatar: ImageModel | undefined;
};

export type { UserModel };
