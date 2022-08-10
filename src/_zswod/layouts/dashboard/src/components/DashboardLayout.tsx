import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import useCollapseDrawer from 'src/hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from 'src/config';
//
import { NavbarVertical } from './NavbarVertical';
import Scrollbar from 'src/components/Scrollbar';

// ----------------------------------------------------------------------

type MainStyleProps = {
  collapseClick: boolean;
};

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
  paddingBottom: 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

const DashboardLayout: FC = () => {
  const { collapseClick } = useCollapseDrawer();

  const [open, setOpen] = useState(false);

  return (
    <Scrollbar>
      <Box
        sx={{
          maxHeight: '100vh',
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

        <MainStyle collapseClick={collapseClick}>
          <Outlet />
        </MainStyle>
      </Box>
    </Scrollbar>
  );
};

export { DashboardLayout };
