import { FC } from 'react';
import { Editor } from 'src/_zswod/modules/Quill';

type CustomPageContentEditorProps = {
  content?: string;
  onContentChange?: (content: string) => void;
};

const CustomPageContentEditor: FC<CustomPageContentEditorProps> = ({
  content,
  onContentChange,
}) => <Editor height={'75vh'} value={content} onChange={onContentChange} />;

export { CustomPageContentEditor };
