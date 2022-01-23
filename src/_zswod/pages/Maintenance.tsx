import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
//
import { MaintenanceIllustration } from 'src/assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <RootStyle title="Maintenance | Minimal-UI">
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          Tutaj jeszcze nic nie ma
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Ale wkrótce będzie!</Typography>

        <MaintenanceIllustration sx={{ my: 10, height: 240 }} />

        <Button variant="contained" size="large" component={RouterLink} to="/">
          Strona główna
        </Button>
      </Container>
    </RootStyle>
  );
}
