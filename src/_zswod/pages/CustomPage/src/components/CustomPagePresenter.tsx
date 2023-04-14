import { FC, useState } from 'react';
import { CustomPageToolBar } from './CustomPageToolBar';
import { CustomPageTopBar } from './CustomPageTopBar';
import { CustomPageModel } from 'src/_zswod/models/CustomPage';
import { CustomPageContentEditor } from './customPageContent/CustomPageContentEditor';
import { CustomPageContentPresenter } from './customPageContent/CustomPageContentPresenter';

type CustomPagePresenterProps = Pick<CustomPageModel, 'section' | 'title'> & {
  content?: string;
  startInEditMode?: boolean;
  onEditModeEnd?: (content: string) => void;
  onRemove?: () => void;
};

const CustomPagePresenter: FC<CustomPagePresenterProps> = ({
  section,
  title,
  content = '',
  startInEditMode,
  onEditModeEnd,
  onRemove,
}) => {
  const [isEditing, setIsEditing] = useState(startInEditMode);
  const [customPageContent, setCustomPageContent] = useState(content);
  const startEditing = () => setIsEditing(true);
  const handleEditModeEnd = () => {
    setIsEditing(false);
    onEditModeEnd?.(customPageContent);
  };

  return (
    <>
      <CustomPageTopBar title={title} section={section} />
      <CustomPageToolBar
        editMode={isEditing}
        onEditModeStart={startEditing}
        onEditModeEnd={handleEditModeEnd}
        onRemove={onRemove}
      />
      {isEditing ? (
        <CustomPageContentEditor
          content={customPageContent}
          onContentChange={setCustomPageContent}
        />
      ) : (
        <CustomPageContentPresenter content={customPageContent} />
      )}
    </>
  );
};

export { CustomPagePresenter };
