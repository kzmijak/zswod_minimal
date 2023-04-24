import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container } from '@mui/material';
import useOffSetTop from 'src/hooks/useOffSetTop';
import useResponsive from 'src/hooks/useResponsive';
import cssStyles from 'src/utils/cssStyles';
import { HEADER } from 'src/config';
import { MenuDesktop } from './MenuDesktop';
import { Logo } from 'src/_zswod/components/Logo';
import { FC } from 'react';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { FetchCustomPageHeaders } from 'src/_zswod/modules/CustomPageHeaders';

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

type MainHeaderProps = {
  disableOffsetStyles?: boolean;
};
const MainHeader: FC<MainHeaderProps> = ({ disableOffsetStyles }) => {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT) || disableOffsetStyles;
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <FetchCustomPageHeaders />
      <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
        <ToolbarStyle
          disableGutters
          sx={(theme) => ({
            ...(isOffset && {
              ...cssStyles(theme).bgBlur(),
              height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
            }),
          })}
        >
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Logo sx={{ width: 78, height: 78, mr: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {isDesktop && <MenuDesktop isOffset={isOffset} />}

            {!isDesktop && <ButtonEPanel size="small" sx={{ marginX: 2 }} />}
          </Container>
        </ToolbarStyle>

        {isOffset && <ToolbarShadowStyle />}
      </AppBar>
    </>
  );
};

export { MainHeader };
