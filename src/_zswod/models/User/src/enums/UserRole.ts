const userRoleConsts = [
  'Unknown',
  'Guest',
  'Student',
  'LegalGuardian',
  'Teacher',
  'Admin',
] as const;

type UserRole = typeof userRoleConsts[number];

const userRoleDisplayValueDict: Record<UserRole, string> = {
  Admin: 'Administrator',
  Teacher: 'Dydaktyk',
  LegalGuardian: 'Opiekun',
  Student: 'Uczeń',
  Guest: 'Gość',
  Unknown: 'Nieznane',
};

export { userRoleConsts, userRoleDisplayValueDict };
export type { UserRole };
