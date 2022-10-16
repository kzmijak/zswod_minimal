const fontSizeConsts = [
  '8px',
  '9px',
  '10px',
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '42px',
  '54px',
  '68px',
  '84px',
  '98px',
] as const;

type FontSize = typeof fontSizeConsts[number];

export { fontSizeConsts };
export type { FontSize };
