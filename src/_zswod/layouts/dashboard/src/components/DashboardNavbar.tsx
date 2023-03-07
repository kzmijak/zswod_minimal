import { styled, Stack, Drawer, Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';
import Scrollbar from 'src/components/Scrollbar';
import { NAVBAR } from 'src/config';
import useResponsive from 'src/hooks/useResponsive';
import { Logo } from 'src/_zswod/components/Logo';
import { CatIllustration } from '../assets/illustration_cat';
import { NavigationMenu } from './NavigationMenu';
import { UserInfo } from './UserInfo';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

type DashboardNavbarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

const DashboardNavbar: FC<DashboardNavbarProps> = ({ isOpenSidebar, onCloseSidebar }) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: 'common.white', borderRadius: 40, padding: 0 }}
        >
          <Logo />
        </Stack>

        <UserInfo />
      </Stack>

      <Box padding={1}>
        <NavigationMenu />
      </Box>

      <Box sx={{ my: 5 }}>
        <CatIllustration />
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: NAVBAR.DASHBOARD_WIDTH,
        },
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'dashed',
              bgcolor: 'background.default',
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
};

export { DashboardNavbar };
