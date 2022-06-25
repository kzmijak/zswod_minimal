// components
import { menuContents } from 'src/_zswod/routes/src/menu.paths';

// ----------------------------------------------------------------------

const navConfigMapped = [
  {
    subheader: 'Główne',
    items: menuContents.map((section) => ({
      title: section.label,
      path: section.link,
      children: section.children.map((page) => ({
        title: page.label,
        path: page.link,
      })),
    })),
  },
];

export default navConfigMapped;
