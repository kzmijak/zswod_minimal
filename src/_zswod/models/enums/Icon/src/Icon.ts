const iconConsts = [
  'News',
  'Gallery',
  'Enlist',
  'Documents',
  'Chronicle',
  'Library',
  'Contests',
  'Projects',
  'Privacy',
  'Meeting',
  'Consult',
  'Counsil',
  'Staff',
  'Lessons',
  'Help',
  'Grades',
  'StudentCounsil',
  'Pedagogue',
  'Volunteer',
  'Mentors',
  'Extracurricular',
  'Talentowisko',
  'Unknown',
] as const;

type Icon = typeof iconConsts[number];

export { iconConsts };
export type { Icon };
