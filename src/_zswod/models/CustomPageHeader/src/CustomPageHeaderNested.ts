import { Icon } from '../../enums/Icon';

type CustomPageHeaderItem = {
  titleNormalized: string;
  title: string;
  icon: Icon;
  isExternal?: boolean;
  link?: string;
};

type CustomPageHeaderSection = {
  section: string;
  items: CustomPageHeaderItem[];
};

export type { CustomPageHeaderSection, CustomPageHeaderItem };
