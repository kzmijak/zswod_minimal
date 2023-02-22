import { useEffect, FC } from 'react';
import Lightbox from 'react-18-image-lightbox';
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, GlobalStyles } from '@mui/material';

const LightboxModalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '& .ReactModalPortal': {
          '& .ril__outer': {
            backdropFilter: 'blur(8px)',
            backgroundColor: alpha(theme.palette.grey[900], 0.88),
          },

          // Toolbar
          '& .ril__toolbar': {
            height: 'auto !important',
            padding: theme.spacing(2, 3),
            backgroundColor: 'transparent',
          },
          '& .ril__toolbarLeftSide': { display: 'none' },
          '& .ril__toolbarRightSide': {
            height: 'auto !important',
            padding: 0,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            '& li': {
              display: 'flex',
              alignItems: 'center',
            },
            '& li:first-of-type': {
              flexGrow: 1,
            },
            '& li:not(:first-of-type)': {
              width: theme.spacing(5),
              height: theme.spacing(5),
              justifyContent: 'center',
              marginLeft: theme.spacing(1),
              borderRadius: theme.shape.borderRadius,
            },
          },

          // Button
          '& button:focus': { outline: 'none' },
          '& .ril__toolbarRightSide button': {
            width: '100%',
            height: '100%',
          },
          '& .ril__navButtons': {
            padding: theme.spacing(3),
            borderRadius: theme.shape.borderRadius,
            '&.ril__navButtonPrev': {
              left: theme.spacing(2),
              right: 'auto',
            },
            '&.ril__navButtonNext': {
              right: theme.spacing(2),
              left: 'auto',
            },
          },
        },
      }}
    />
  );
};

type LightboxModalProps = {
  images: string[];
  photoIndex: number;
  setPhotoIndex: (index: number) => void;
  isOpen: boolean;
  onClose: VoidFunction;
};

const LightboxModal: FC<LightboxModalProps> = ({
  images,
  photoIndex,
  setPhotoIndex,
  isOpen,
  onClose,
  ...other
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const showIndex = (
    <Typography variant="subtitle2">{`${photoIndex + 1} / ${images.length}`}</Typography>
  );

  const toolbarButtons = [showIndex];
  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
  };

  return (
    <>
      <LightboxModalStyles />

      {isOpen && (
        <Lightbox
          animationDuration={120}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          toolbarButtons={toolbarButtons}
          reactModalStyle={customStyles}
          nextLabel="Następny obraz"
          prevLabel="Poprzedni obraz"
          zoomInLabel="Zbliż"
          zoomOutLabel="Oddal"
          closeLabel="Zamknij"
          {...other}
        />
      )}
    </>
  );
};

export { LightboxModal };
