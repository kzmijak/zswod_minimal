import { Stack, Typography, ListItem, List } from '@mui/material';
import { FC } from 'react';

const TodoList: FC = () => (
  <Stack spacing={2}>
    <Typography variant="h5">To już prawie koniec</Typography>
    <Stack spacing={1}>
      <Typography variant="body1">
        Jednak przed oddaniem artykułu należy się upewnić co do jego kompletności
      </Typography>
      <Typography>Upewnij się że spełnia on następujące założenia:</Typography>
    </Stack>
    <List>
      <Typography component={ListItem} variant="subtitle1">
        Upewnij się co do poprawności artykułu
      </Typography>
      <Typography component={ListItem} variant="subtitle1">
        Artykuł musi mieć co najmniej jeden obraz
      </Typography>
      <Typography component={ListItem} variant="subtitle1">
        Każdy obraz powinien mieć nadany tytuł oraz uzupełniony tekst alternatywny
      </Typography>
    </List>
  </Stack>
);

export { TodoList };
