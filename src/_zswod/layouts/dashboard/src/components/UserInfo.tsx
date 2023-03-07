import { Box, Fab, Skeleton, Stack, Tooltip, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserRoleDisplayValue, UserRole } from 'src/_zswod/models/User';
import { selectCurrentUserRole } from 'src/_zswod/modules/User';
import { AdminIllustration } from '../assets/illustration_admin';
import LoginIcon from '@mui/icons-material/Login';
import { isLight } from 'src/_zswod/utils/paletteMode';
import { StudentIllustration } from '../assets/illustration_student';
import { LegalGuardianIllustration } from '../assets/illustration_legal_guardian';
import { TeacherIllustration } from '../assets/illustration_teacher';
import { GuestIllustration } from '../assets/illustration_guest';
import { selectAuthenticationStatus } from 'src/_zswod/modules/User/src/slice/selectors';
import { AnimatePresence, m } from 'framer-motion';
import { LogoutButton } from './LogoutButton';

const LoginButton: FC = () => (
  <Tooltip title="Logowanie / Rejestracja">
    <Fab
      component={Link}
      to="/konto/logowanie"
      color="default"
      sx={{ height: 40, width: 40, backgroundColor: 'background.paper', color: 'primary.main' }}
    >
      <LoginIcon />
    </Fab>
  </Tooltip>
);

const roleGraphics: Record<UserRole, ReactNode> = {
  Admin: <AdminIllustration />,
  LegalGuardian: <LegalGuardianIllustration />,
  Student: <StudentIllustration />,
  Teacher: <TeacherIllustration />,
  Guest: <GuestIllustration />,
  Unknown: <GuestIllustration />,
};

const UserInfo: FC = () => {
  const role = useSelector(selectCurrentUserRole) ?? 'Guest';
  const status = useSelector(selectAuthenticationStatus);

  if (status === 'pending')
    return <Skeleton height={80} variant="rectangular" sx={{ borderRadius: 10 }} />;

  return (
    <AnimatePresence>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        component={m.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
        sx={(theme) => ({
          borderRadius: 10,
          height: 80,
          padding: 1,
          transition: 'all 0.2s',
          ...(isLight(theme)
            ? {
                bgcolor: 'grey.200',
                boxShadow: `1px 1px 12px ${theme.palette.grey[300]}`,
              }
            : {
                bgcolor: 'grey.800',
                boxShadow: `0px 0px 4px ${theme.palette.grey[800]}`,
              }),
        })}
      >
        <Box height={60} width={60}>
          {roleGraphics[role]}
        </Box>
        <Stack alignItems="center" justifyContent="center">
          <Typography>{getUserRoleDisplayValue(role)}</Typography>
        </Stack>
        {role === 'Guest' ? <LoginButton /> : <LogoutButton />}
      </Stack>
    </AnimatePresence>
  );
};

export { UserInfo };
