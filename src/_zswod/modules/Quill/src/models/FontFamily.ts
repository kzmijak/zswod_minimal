const fontFamilyConsts = ['Arial', 'Tahoma', 'Georgia', 'Impact', 'Verdana'] as const;

type FontFamily = typeof fontFamilyConsts[number];

export { fontFamilyConsts };
export type { FontFamily };
