import { MenuItem, alpha, Stack, Typography, Box } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router';
import { Iconography } from 'src/_zswod/components/Iconography';
import { SmartLink } from 'src/_zswod/components/SmartLink';
import { CustomPageHeaderItem } from 'src/_zswod/models/CustomPageHeader';

type NavigationItemProps = CustomPageHeaderItem;

const NavigationItem: FC<NavigationItemProps> = ({ icon, title, titleNormalized, link }) => {
  const { pathname } = useLocation();

  const isSelected = pathname.includes(titleNormalized);
  return (
    <SmartLink to={Boolean(link) ? link! : titleNormalized}>
      <MenuItem
        sx={(theme) => ({
          whiteSpace: 'normal',
          ...(isSelected && {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            ':hover': { backgroundColor: alpha(theme.palette.primary.main, 0.3) },
          }),
          transition: 'all 0.2s',
          borderRadius: 3,
        })}
      >
        <Stack direction="row" spacing={2} alignItems="center" minHeight={30}>
          <Box
            width={30}
            height={30}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: isSelected ? 'primary.dark' : 'grey.700',
              bgcolor: 'background.default',
              borderRadius: 3,
            }}
          >
            <Iconography id={icon} />
          </Box>
          <Typography variant="subtitle2">{title}</Typography>
        </Stack>
      </MenuItem>
    </SmartLink>
  );
};

export { NavigationItem };
