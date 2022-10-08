import { ReactElement } from 'react';

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: ReactElement;
  to?: string;
  items?: {
    title: string;
    path: string;
  }[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};
