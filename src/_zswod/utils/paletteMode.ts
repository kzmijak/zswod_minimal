import { Theme } from '@mui/material';

const getMode = (theme: Theme) => theme.palette.mode;

const isLight = (theme: Theme) => getMode(theme) === 'light';

const isDark = (theme: Theme) => getMode(theme) === 'dark';

export { isLight, isDark };
