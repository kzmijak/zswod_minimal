import { UserRole } from 'src/_zswod/models/User';

type RegisterFormContent = {
  email: string;
  password: string;
  passwordConfirm: string;
  role: UserRole;
};

export type { RegisterFormContent };
