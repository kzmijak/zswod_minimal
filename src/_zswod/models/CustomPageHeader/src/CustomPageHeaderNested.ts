import { Icon } from '../../enums/Icon';

type CustomPageHeaderItem = {
  titleNormalized: string;
  title: string;
  icon: Icon;
  order: number;
  link?: string;
};

type CustomPageHeaderSection = {
  section: string;
  items: CustomPageHeaderItem[];
};

export type { CustomPageHeaderSection, CustomPageHeaderItem };
