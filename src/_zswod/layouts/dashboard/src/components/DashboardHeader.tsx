import { AppBar, Toolbar } from '@mui/material';
import { FC } from 'react';
import { IconButtonAnimate } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import useResponsive from 'src/hooks/useResponsive';
import cssStyles from 'src/utils/cssStyles';

type DashboardHeaderProps = {
  onOpenSidebar: VoidFunction;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({ onOpenSidebar }) => {
  const isDesktop = useResponsive('up', 'lg');

  if (isDesktop) return null;

  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: 'none', maxWidth: '100%' }}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
        }}
      >
        <IconButtonAnimate
          onClick={onOpenSidebar}
          sx={(theme) => ({
            color: 'text.primary',
            borderRadius: '0 10px 10px 10px',
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
            ...cssStyles(theme).bgBlur(),
          })}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButtonAnimate>
      </Toolbar>
    </AppBar>
  );
};

export { DashboardHeader };
