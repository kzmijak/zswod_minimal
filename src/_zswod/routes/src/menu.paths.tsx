import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { ReactNode } from 'react';
import { TalentowiskoIcon } from 'src/_zswod/components/TalentowiskoIcon';
import {
  NewsIcon,
  ChronicleIcon,
  ConsultIcon,
  ContestsIcon,
  CounsilIcon,
  DocumentsIcon,
  EnlistIcon,
  ExtracurricularIcon,
  GalleryIcon,
  GradesIcon,
  LessonsIcon,
  LibraryIcon,
  MeetingIcon,
  MentorsIcon,
  PedagogueIcon,
  PrivacyIcon,
  ProjectsIcon,
  StaffIcon,
  StudentCounsilIcon,
  VolunteerIcon,
  HelpIcon,
} from './icons';

type PathReduced = {
  [key: string]: string;
};

const PATH_ACCOUNT = `/konto`;
const PATH_VULCAN =
  'https://cufs.vulcan.net.pl/powiatdebicki/Account/LogOn?ReturnUrl=%2Fpowiatdebicki%2FFS%2FLS%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx%26wctx%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx';

const PATH_DASHBOARD_ROOT = `/etablica`;
const PATH_DASHBOARD: PathReduced = {
  about: `${PATH_DASHBOARD_ROOT}/oszkole`,
  parents: `${PATH_DASHBOARD_ROOT}/dlarodzicow`,
  students: `${PATH_DASHBOARD_ROOT}/dlaucznia`,
};

type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
  key?: string;
  icon?: ReactNode;
};

const menuContents = [
  {
    label: 'Główne',
    children: [
      {
        key: 'nowosci',
        label: 'Nowości',
        link: `${PATH_DASHBOARD_ROOT}/nowosci`,
        icon: <NewsIcon />,
      },
      {
        key: 'galeria',
        label: 'Galeria',
        link: `${PATH_DASHBOARD_ROOT}/galeria`,
        icon: <GalleryIcon />,
      },
    ],
    icon: <GradeOutlinedIcon />,
  },
  {
    label: 'O Szkole',
    children: [
      {
        key: 'rekrutacja',
        label: 'Rekrutacja',
        link: `${PATH_DASHBOARD.about}/rekrutacja`,
        icon: <EnlistIcon />,
      },
      {
        key: 'dokumenty',
        label: 'Szkolne dokumenty',
        link: `${PATH_DASHBOARD.about}/dokumenty`,
        icon: <DocumentsIcon />,
      },
      {
        key: 'kronika',
        label: 'Kronika szkoły',
        link: `${PATH_DASHBOARD.about}/kronika`,
        icon: <ChronicleIcon />,
      },
      {
        key: 'biblioteka',
        label: 'Biblioteka',
        link: `${PATH_DASHBOARD.about}/biblioteka`,
        icon: <LibraryIcon />,
      },
      {
        key: 'konkursy',
        label: 'Konkursy',
        link: `${PATH_DASHBOARD.about}/konkursy`,
        icon: <ContestsIcon />,
      },
      {
        key: 'projekty',
        label: 'Projekty',
        link: `${PATH_DASHBOARD.about}/projekty`,
        icon: <ProjectsIcon />,
      },
      { key: 'rodo', label: 'RODO', link: `${PATH_DASHBOARD.about}/rodo`, icon: <PrivacyIcon /> },
      {
        key: 'talentowisko',
        label: 'Talentowisko',
        link: 'https://www.talentowisko.pl/podstawowa/szkola/szkola-podstawowa-im-jana-pawla-ii-w-orlowie-drewnianym/',
        icon: <TalentowiskoIcon />,
      },
    ],
  },
  {
    label: 'Dla Rodziców',
    children: [
      {
        key: 'harmonogram',
        label: 'Harmonogram zebrań',
        link: `${PATH_DASHBOARD.parents}/harmonogram`,
        icon: <MeetingIcon />,
      },
      {
        key: 'konsultacje',
        label: 'Konsultacje dla Rodziców',
        link: `${PATH_DASHBOARD.parents}/konsultacje`,
        icon: <ConsultIcon />,
      },
      {
        key: 'rada',
        label: 'Rada Rodziców',
        link: `${PATH_DASHBOARD.parents}/rada`,
        icon: <CounsilIcon />,
      },
      {
        key: 'grono',
        label: 'Grono pedagogiczne',
        link: `${PATH_DASHBOARD.parents}/grono`,
        icon: <StaffIcon />,
      },
      {
        key: 'kalendarz',
        label: 'Kalendarz roku szkolnego',
        link: `${PATH_DASHBOARD.parents}/kalendarz`,
        icon: <LessonsIcon />,
      },
      {
        key: 'pomocpp',
        label: 'Pomoc psychologiczno-pedagogiczna',
        link: `${PATH_DASHBOARD.parents}/pomocpp`,
        icon: <HelpIcon />,
      },
    ],
  },
  {
    label: 'Dla Ucznia',
    children: [
      {
        key: 'plan',
        label: 'Tygodniowy Plan Zajęć',
        link: `${PATH_DASHBOARD.students}/plan`,
        icon: <LessonsIcon />,
      },
      {
        key: 'dziennik',
        label: 'Dziennik elektroniczny',
        link: `${PATH_DASHBOARD.students}/dziennik`,
        icon: <GradesIcon />,
      },
      {
        key: 'samorzad',
        label: 'Samorząd Uczniowski',
        link: `${PATH_DASHBOARD.students}/samorzad`,
        icon: <StudentCounsilIcon />,
      },
      {
        key: 'zajecia',
        label: 'Zajęcia pozalekcyjne',
        link: `${PATH_DASHBOARD.students}/zajecia`,
        icon: <ExtracurricularIcon />,
      },
      {
        key: 'pedagog',
        label: 'Pedagog szkolny',
        link: `${PATH_DASHBOARD.students}/pedagog`,
        icon: <PedagogueIcon />,
      },
      {
        key: 'wolontariat',
        label: 'Szkolne Koło Wolontariatu',
        link: `${PATH_DASHBOARD.students}/wolontariat`,
        icon: <VolunteerIcon />,
      },
      {
        key: 'wychowawcy',
        label: 'Wychowawcy',
        link: `${PATH_DASHBOARD.students}/wychowawcy`,
        icon: <MentorsIcon />,
      },
    ],
  },
] as readonly MenuItem[];

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
  menuContents[0].children!.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsAboutConsts>;

const PATHS_PARENTS = Object.fromEntries(
  menuContents[1].children!.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsParentsConsts>;

const PATHS_STUDENTS = Object.fromEntries(
  menuContents[2].children!.map((obj) => [obj.key, { label: obj.label, link: obj.link }])
) as PathsAbout<typeof PathsStudentsConsts>;

export {
  menuContents,
  PATHS_ABOUT,
  PATHS_PARENTS,
  PATHS_STUDENTS,
  PATH_DASHBOARD,
  PATH_DASHBOARD_ROOT,
  PATH_ACCOUNT,
  PATH_VULCAN,
};
