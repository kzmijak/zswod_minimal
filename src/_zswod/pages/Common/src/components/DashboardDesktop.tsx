import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import { WelcomeBoard } from './elements/WelcomeBoard';

const GridStyled = styled(Grid)({
  width: '100%',
  height: '100%',
});

const DashboardDesktop: FC = () => (
  <GridStyled container direction="column">
    <GridStyled container item direction="row" xs={10}>
      <GridStyled item xs={4} sx={{ padding: 2 }}>
        <WelcomeBoard />
      </GridStyled>
      <GridStyled container item xs={8} direction="column">
        <GridStyled item xs={4}>
          Tu będzie artykuł
        </GridStyled>
        <GridStyled item xs={8}>
          Tu będą obrazy z galerii
        </GridStyled>
      </GridStyled>
    </GridStyled>
    <GridStyled item xs={2}>
      Tu będą skróty
    </GridStyled>
  </GridStyled>
);

export { DashboardDesktop };
