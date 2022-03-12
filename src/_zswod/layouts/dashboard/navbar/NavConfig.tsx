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

// const navConfig = [
//   // GENERAL
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'O Szkole',
//     items: [
//       { title: 'Kontakt', path: '/dashboard/one', icon: ICONS.dashboard },
//       { title: 'Rekrutacja', path: '/dashboard/two', icon: ICONS.ecommerce },
//       { title: 'Galeria', path: '/dashboard/three', icon: ICONS.analytics },
//     ],
//   },

//   // MANAGEMENT
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'Dla Rodziców',
//     items: [
//       {
//         title: 'Komunikaty i informacje',
//         path: '/dashboard/user',
//         icon: ICONS.user,
//         children: [
//           { title: 'Zapisz się na konkurs!', path: '/dashboard/user/four' },
//           { title: 'Szkoła otwarta', path: '/dashboard/user/five' },
//           { title: 'Stołówka serwuje nowe potrawy', path: '/dashboard/user/six' },
//         ],
//       },
//     ],
//   },
// ];

export default navConfigMapped;
