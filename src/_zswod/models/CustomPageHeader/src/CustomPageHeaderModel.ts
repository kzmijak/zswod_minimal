import { Icon } from '../../enums/Icon';

type CustomPageHeaderModel = {
  order: number;
  titleNormalized: string;
  title: string;
  icon: Icon;
  link?: string;
  section: string;
};

export type { CustomPageHeaderModel };
