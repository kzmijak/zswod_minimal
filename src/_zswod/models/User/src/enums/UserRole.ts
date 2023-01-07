const userRoleConsts = ['Admin', 'Teacher', 'LegalGuardian', 'Student', 'Unknown'] as const;

type UserRole = typeof userRoleConsts[number];

const userRoleDisplayValueDict: Record<UserRole, string> = {
  Admin: 'Administrator',
  Teacher: 'Dydaktyk',
  LegalGuardian: 'Opiekun',
  Student: 'Uczeń',
  Unknown: 'Nieznane',
};

export { userRoleConsts, userRoleDisplayValueDict };
export type { UserRole };
