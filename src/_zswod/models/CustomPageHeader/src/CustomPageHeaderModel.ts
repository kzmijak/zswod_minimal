import { Icon } from '../../enums/Icon';

type CustomPageHeaderModel = {
  titleNormalized: string;
  title: string;
  icon: Icon;
  isExternal?: boolean;
  link?: string;
  section: string;
};

export type { CustomPageHeaderModel };
