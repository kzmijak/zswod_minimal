type PathReduced = {
  [key: string]: string;
};

const PATH_ACCOUNT = `/konto`;

const PATH_DASHBOARD_ROOT = `/etablica`;
const PATH_DASHBOARD: PathReduced = {
  about: `${PATH_DASHBOARD_ROOT}/oszkole`,
  parents: `${PATH_DASHBOARD_ROOT}/dlarodzicow`,
  students: `${PATH_DASHBOARD_ROOT}/dlaucznia`,
};

const menuContents = [
  {
    label: 'O Szkole',
    link: PATH_DASHBOARD.about,
    children: [
      { key: 'nowosci', label: 'Nowości', link: `${PATH_DASHBOARD.about}/nowosci` },
      { key: 'galeria', label: 'Galeria', link: `${PATH_DASHBOARD.about}/galeria` },
      { key: 'rekrutacja', label: 'Rekrutacja', link: `${PATH_DASHBOARD.about}/rekrutacja` },
      { key: 'dokumenty', label: 'Szkolne dokumenty', link: `${PATH_DASHBOARD.about}/dokumenty` },
      { key: 'kronika', label: 'Kronika szkoły', link: `${PATH_DASHBOARD.about}/kronika` },
      { key: 'biblioteka', label: 'Biblioteka', link: `${PATH_DASHBOARD.about}/biblioteka` },
      { key: 'konkursy', label: 'Konkursy', link: `${PATH_DASHBOARD.about}/konkursy` },
      { key: 'projekty', label: 'Projekty', link: `${PATH_DASHBOARD.about}/projekty` },
      { key: 'rodo', label: 'RODO', link: `${PATH_DASHBOARD.about}/rodo` },
      {
        key: 'talentowisko',
        label: 'Talentowisko',
        link: 'https://www.talentowisko.pl/podstawowa/szkola/szkola-podstawowa-im-jana-pawla-ii-w-orlowie-drewnianym/',
      },
    ],
  },
  {
    label: 'Dla Rodziców',
    link: PATH_DASHBOARD.parents,
    children: [
      {
        key: 'harmonogram',
        label: 'Harmonogram zebrań',
        link: `${PATH_DASHBOARD.parents}/harmonogram`,
      },
      {
        key: 'konsultacje',
        label: 'Konsultacje dla Rodziców',
        link: `${PATH_DASHBOARD.parents}/konsultacje`,
      },
      { key: 'rada', label: 'Rada Rodziców', link: `${PATH_DASHBOARD.parents}/rada` },
      { key: 'grono', label: 'Grono pedagogiczne', link: `${PATH_DASHBOARD.parents}/grono` },
      {
        key: 'kalendarz',
        label: 'Kalendarz roku szkolnego',
        link: `${PATH_DASHBOARD.parents}/kalendarz`,
      },
      {
        key: 'pomocpp',
        label: 'Pomoc psychologiczno-pedagogiczna',
        link: `${PATH_DASHBOARD.parents}/pomocpp`,
      },
    ],
  },
  {
    label: 'Dla Ucznia',
    link: PATH_DASHBOARD.students,
    children: [
      {
        key: 'zajecia',
        label: 'Tygodniowy Plan Zajęć',
        link: `${PATH_DASHBOARD.students}/zajecia`,
      },
      {
        key: 'dziennik',
        label: 'Dziennik elektroniczny',
        link: `${PATH_DASHBOARD.students}/dziennik`,
      },
      {
        key: 'samorzad',
        label: 'Samorząd Uczniowski',
        link: `${PATH_DASHBOARD.students}/samorzad`,
      },
      { key: 'zajecia', label: 'Zajęcia pozalekcyjne', link: `${PATH_DASHBOARD.students}/zajecia` },
      { key: 'pedagog', label: 'Pedagog szkolny', link: `${PATH_DASHBOARD.students}/pedagog` },
      {
        key: 'wolontariat',
        label: 'Szkolne Koło Wolontariatu',
        link: `${PATH_DASHBOARD.students}/wolontariat`,
      },
      { key: 'wychowawcy', label: 'Wychowawcy', link: `${PATH_DASHBOARD.students}/wychowawcy` },
    ],
  },
];

const PathsAboutConsts = [
  'nowosci',
  'galeria',
  'rekrutacja',
  'dokumenty',
  'kronika',
  'biblioteka',
  'konkursy',
  'projekty',
  'rodo',
  'talentowisko',
] as const;

const PathsParentsConsts = ['harmonogram', 'konsultacje', 'rada', 'kalendarz', 'pomocpp'] as const;

const PathsStudentsConsts = [
  'zajecia',
  'dziennik',
  'samorzad',
  'zajecia',
  'wolontariat',
  'wychowawcy',
] as const;

type PathsAbout<T extends readonly string[]> = {
  [key in T[number]]: {
    label: string;
    link: string;
  };
};

const PATHS_ABOUT = Object.fromEntries(
  menuContents[0].children.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsAboutConsts>;

const PATHS_PARENTS = Object.fromEntries(
  menuContents[1].children.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsParentsConsts>;

const PATHS_STUDENTS = Object.fromEntries(
  menuContents[2].children.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsStudentsConsts>;

export {
  menuContents,
  PATHS_ABOUT,
  PATHS_PARENTS,
  PATHS_STUDENTS,
  PATH_DASHBOARD,
  PATH_DASHBOARD_ROOT,
  PATH_ACCOUNT,
};
