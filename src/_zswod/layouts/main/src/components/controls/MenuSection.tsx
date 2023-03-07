import { Stack, Tooltip, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { SmartLink } from 'src/_zswod/components/SmartLink';

type MenuSectionContentProps = Pick<MenuSectionProps, 'children'>;
const MenuSectionContent: FC<MenuSectionContentProps> = ({ children }) => (
  <Stack spacing={2} padding={2}>
    {children}
  </Stack>
);

type MenuSectionProps = {
  label: string;
  children?: ReactNode;
  href?: string;
  variant?: 'dark' | 'light';
};

const MenuSection: FC<MenuSectionProps> = ({ label, children, href, variant }) => {
  const isExpandible = Boolean(children);
  const isLink = Boolean(href);

  const linkProps = isLink
    ? {
        component: SmartLink,
        to: href,
      }
    : {};

  const color = variant === 'light' ? 'grey.300' : 'grey.800';

  const content = (
    <Stack
      {...linkProps}
      direction="row"
      alignItems="center"
      color={color}
      sx={{ cursor: isLink ? 'pointer' : 'default', transition: 'all 0.2s' }}
    >
      <Typography color={color} variant="h5">
        {label}
      </Typography>
      {isExpandible && (
        <KeyboardArrowRightIcon
          className="expand-icon"
          sx={{ transform: 'rotate(90deg)', color }}
        />
      )}
    </Stack>
  );

  if (isExpandible) {
    return <Tooltip title={<MenuSectionContent>{children}</MenuSectionContent>}>{content}</Tooltip>;
  }

  return <>{content}</>;
};

export { MenuSection };
