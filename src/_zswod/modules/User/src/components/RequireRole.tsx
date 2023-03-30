import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { UserRole } from 'src/_zswod/models/User';
import { userRoleConsts } from 'src/_zswod/models/User/src/enums/UserRole';
import { selectCurrentUserRole } from '../slice/selectors';

const getRolePriority = (role: UserRole | undefined) => userRoleConsts.indexOf(role ?? 'Unknown');

type RequireRoleProps = {
  role: UserRole;
  children: ReactNode;
};

const RequireRole: FC<RequireRoleProps> = ({ children, role }) => {
  const userRole = useSelector(selectCurrentUserRole);

  const minimumPriority = getRolePriority(role);
  const userPriority = getRolePriority(userRole);

  if (minimumPriority > userPriority) return null;

  return <>{children}</>;
};

export { RequireRole };
