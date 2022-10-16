const headingConsts = [
  'Heading 1',
  'Heading 2',
  'Heading 3',
  'Heading 4',
  'Heading 5',
  'Heading 6',
] as const;

type Heading = typeof headingConsts[number];

export { headingConsts };
export type { Heading };
