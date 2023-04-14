import { FC, ReactNode } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { Toolbar } from './Toolbar';
import { formatConsts } from '../models/Format';

const EditorStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`,
  '& .ql-container.ql-snow': {
    borderColor: 'transparent',
    ...theme.typography.body1,
    fontFamily: theme.typography.fontFamily,
  },
  '& .ql-editor': {
    height: 200,
    '&.ql-blank::before': {
      fontStyle: 'normal',
      color: theme.palette.text.disabled,
    },
    '& pre.ql-syntax': {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

type EditorProps = ReactQuillProps & {
  id?: string;
  error?: boolean;
  simple?: boolean;
  helperText?: ReactNode;
  label?: string;
  sx?: BoxProps;
  height?: string | number;
};

const Editor: FC<EditorProps> = ({
  id = 'minimal-quill',
  error,
  value,
  onChange,
  simple = false,
  helperText,
  sx,
  label,
  height,
  ...other
}) => {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  const handleChange: ReactQuillProps['onChange'] = (value, delta, source, editor) => {
    const valueToSet = editor.getLength() > 1 ? value : '';
    onChange?.(valueToSet, delta, source, editor);
  };

  return (
    <>
      <EditorStyle
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
          }),
          '& .ql-editor': {
            height,
          },
          ...sx,
        }}
      >
        <Toolbar id={id} isSimple={simple} />
        <ReactQuill
          value={value}
          onChange={handleChange}
          modules={modules}
          formats={[...formatConsts]}
          placeholder={label}
          {...other}
        />
      </EditorStyle>

      {helperText}
    </>
  );
};

export { Editor };
