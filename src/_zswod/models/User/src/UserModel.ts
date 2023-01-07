import { UserRole } from './enums/UserRole';

type UserModel = {
  id: string;
  email: string;
  password: string;
  role: UserRole;
};

export type { UserModel };
