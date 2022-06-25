import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
import cssStyles from 'src/utils/cssStyles';
import { HEADER, NAVBAR } from 'src/config';
import Logo from 'src/components/Logo';
import Iconify from 'src/components/Iconify';
import { IconButtonAnimate } from 'src/components/animate';
import { FC } from 'react';

type RootStyleProps = {
  isCollapse: boolean;
  isOffset: boolean;
  verticalLayout: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})<RootStyleProps>(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

type DashboardHeaderProps = {
  onOpenSidebar: VoidFunction;
  isCollapse?: boolean;
  verticalLayout?: boolean;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({
  onOpenSidebar,
  isCollapse = false,
  verticalLayout = false,
}) => {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}

        <Box sx={{ flexGrow: 1 }} />
        <Button>Wyloguj</Button>
      </Toolbar>
    </RootStyle>
  );
};

export { DashboardHeader };
