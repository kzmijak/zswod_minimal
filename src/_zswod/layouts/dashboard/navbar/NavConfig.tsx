// components
import SvgIconStyle from 'src/components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'O Szkole',
    items: [
      { title: 'Kontakt', path: '/dashboard/one', icon: ICONS.dashboard },
      { title: 'Rekrutacja', path: '/dashboard/two', icon: ICONS.ecommerce },
      { title: 'Galeria', path: '/dashboard/three', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Dla Rodziców',
    items: [
      {
        title: 'Komunikaty i informacje',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          { title: 'Zapisz się na konkurs!', path: '/dashboard/user/four' },
          { title: 'Szkoła otwarta', path: '/dashboard/user/five' },
          { title: 'Stołówka serwuje nowe potrawy', path: '/dashboard/user/six' },
        ],
      },
    ],
  },
];

export default navConfig;
