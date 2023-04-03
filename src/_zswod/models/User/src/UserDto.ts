import { ImageDto } from '../../Image';

type UserDto = {
  id: string;
  email: string;
  role: string;
  firstName: string | undefined;
  lastName: string | undefined;
  avatar: ImageDto | undefined;
};

export type { UserDto };
