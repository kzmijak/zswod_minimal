import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send'; // material
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Paper, Fab } from '@mui/material';
// routes
// components
import Page from '../../../components/Page';
import QuillEditor from 'src/_zswod/components/editor/quill';
import Markdown from 'src/_zswod/components/Markdown';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

function Editor() {
  const [quillFull, setQuillFull] = useState('');

  return (
    <RootStyle title="Components: Editor | Minimal-UI">
      <Typography variant="h3" textAlign="center" sx={{ mb: 3 }}>
        Dodawanie artykułu
      </Typography>
      <Stack direction="row" spacing={2}>
        <Container maxWidth="lg">
          <Typography variant="h5">Edytor</Typography>
          <QuillEditor
            id="full-editor"
            value={quillFull}
            onChange={(value) => setQuillFull(value)}
            sx={{ minHeight: 800 }}
          />
        </Container>
        <Container maxWidth="lg">
          <Typography variant="h5">Podgląd</Typography>
          <Paper variant="outlined" sx={{ minHeight: 800, mt: 2 }}>
            <Typography sx={{ wordWrap: 'break-word' }}>
              <Markdown children={quillFull} />
            </Typography>
          </Paper>
        </Container>
      </Stack>

      <Fab sx={{ position: 'fixed', bottom: 50, right: 50, width: 60, height: 60, zIndex: 15 }}>
        <SendIcon sx={{ height: 25, width: 25 }} />
      </Fab>
    </RootStyle>
  );
}

export { Editor as DevPage };
