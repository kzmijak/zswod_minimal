import { Stack, StackProps, styled } from '@mui/material';
import { FC } from 'react';

const ToolbarStyled = styled(Stack)(({ theme }) => ({
  border: `solid 1px ${theme.palette.divider}`,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: theme.palette.background.neutral,
  borderRadius: 10,
  padding: 10,
}));

type ToolbarProps = StackProps;
const Toolbar: FC<ToolbarProps> = (props) => (
  <ToolbarStyled minWidth="100%" direction="row" spacing={2} justifyContent="flex-end" {...props} />
);

export { Toolbar };
