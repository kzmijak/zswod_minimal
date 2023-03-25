import { ChangeEvent, FC, useState } from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Button, Dialog, DialogProps, Stack, TextField, Typography } from '@mui/material';
import Image from 'src/components/Image';
import { ImageModel } from 'src/_zswod/models/Image';

type ImageFormDialogProps = Pick<DialogProps, 'open' | 'onClose'> &
  Pick<ImageModel, 'alt' | 'src'> & { onSubmit: (alt: string) => void };

const ImageFormDialog: FC<ImageFormDialogProps> = ({ open, onClose, alt, onSubmit, src }) => {
  const [newAlt, setNewAlt] = useState(alt);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewAlt(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(newAlt);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack
        component="form"
        direction="row"
        spacing={1}
        onSubmit={handleSubmit}
        sx={{ backgroundColor: 'transparent' }}
      >
        <Image src={src} alt={newAlt} />
        <Stack
          spacing={3}
          minWidth={300}
          minHeight={400}
          justifyContent="center"
          paddingX={1}
          paddingY={2}
        >
          <Typography variant="h6">Uzupełnij te wartości</Typography>
          <Stack spacing={1}>
            <TextField
              value={newAlt}
              onChange={handleChange}
              fullWidth
              label="Tekst alternatywny"
              name="alt"
              helperText="Ta treść nie jest nigdzie wyświetlana, ale wykorzystywana jest przez różne narzędzia korzystające z interfejsu przeglądarki, np. żeby umożliwić nawigację głosową"
            />
          </Stack>
          <Button variant="contained" type="submit">
            Zapisz
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};
type SetAltButtonProps = Pick<ImageModel, 'alt' | 'src'> & { onAltChange: (alt: string) => void };

const SetAltButton: FC<SetAltButtonProps> = ({ alt, src, onAltChange }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const handleFormSubmit = (alt: string) => {
    onAltChange(alt);
    closeDialog();
  };

  return (
    <>
      <Button
        startIcon={<ModeEditOutlineIcon />}
        endIcon={!Boolean(alt) && <PriorityHighIcon />}
        variant="outlined"
        onClick={openDialog}
      >
        Nadaj tekst alternatywny
      </Button>
      <ImageFormDialog
        open={dialogOpen}
        onClose={closeDialog}
        alt={alt}
        src={src}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export { SetAltButton };
