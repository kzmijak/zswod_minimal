import NewsIcon from '@mui/icons-material/GradeOutlined';
import GalleryIcon from '@mui/icons-material/FilterVintageOutlined';
import EnlistIcon from '@mui/icons-material/HailOutlined';
import DocumentsIcon from '@mui/icons-material/FolderOutlined';
import ChronicleIcon from '@mui/icons-material/HistoryEduOutlined';
import LibraryIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ContestsIcon from '@mui/icons-material/EmojiEventsOutlined';
import ProjectsIcon from '@mui/icons-material/TableRestaurantOutlined';
import PrivacyIcon from '@mui/icons-material/VerifiedUserOutlined';
import MeetingIcon from '@mui/icons-material/CalendarMonthOutlined';
import ConsultIcon from '@mui/icons-material/ContactSupportOutlined';
import CounsilIcon from '@mui/icons-material/GroupsOutlined';
import StaffIcon from '@mui/icons-material/BadgeOutlined';
import LessonsIcon from '@mui/icons-material/EventNoteOutlined';
import HelpIcon from '@mui/icons-material/SupportOutlined';
import GradesIcon from '@mui/icons-material/BookOutlined';
import StudentCounsilIcon from '@mui/icons-material/GroupOutlined';
import ExtracurricularIcon from '@mui/icons-material/AccessTimeOutlined';
import PedagogueIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import VolunteerIcon from '@mui/icons-material/VolunteerActivismOutlined';
import MentorsIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { ReactNode } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Icon } from './Icon';
import { TalentowiskoIcon } from 'src/_zswod/components/TalentowiskoIcon';

const iconNodeDict: Record<Icon, ReactNode> = {
  Chronicle: <ChronicleIcon />,
  Consult: <ConsultIcon />,
  Contests: <ContestsIcon />,
  Counsil: <CounsilIcon />,
  Documents: <DocumentsIcon />,
  Enlist: <EnlistIcon />,
  Extracurricular: <ExtracurricularIcon />,
  Gallery: <GalleryIcon />,
  Grades: <GradesIcon />,
  Help: <HelpIcon />,
  Lessons: <LessonsIcon />,
  Library: <LibraryIcon />,
  Meeting: <MeetingIcon />,
  Mentors: <MentorsIcon />,
  News: <NewsIcon />,
  Pedagogue: <PedagogueIcon />,
  Privacy: <PrivacyIcon />,
  Projects: <ProjectsIcon />,
  Staff: <StaffIcon />,
  StudentCounsil: <StudentCounsilIcon />,
  Volunteer: <VolunteerIcon />,
  Talentowisko: <TalentowiskoIcon />,
  Unknown: <QuestionMarkIcon />,
};

export { iconNodeDict };
