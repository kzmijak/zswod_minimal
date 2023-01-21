import { Box, Card, CardActionArea, ImageList, ImageListItem, styled } from '@mui/material';
import { FC, useMemo, useState } from 'react';

type BoxImageProps = {
  size: string | number;
  src: string;
};
const BoxImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'src',
})<BoxImageProps>(({ size, src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  height: size,
  width: size,
  objectFit: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const BoxSelect = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 30,
  height: 30,
  color: theme.palette.primary.contrastText,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

type ImageWithKey = {
  url: string;
  key: number;
};

type ImagesGalleryProps = {
  imageUrls: string[];
};

const ImagesGallery: FC<ImagesGalleryProps> = ({ imageUrls }) => {
  const images = useMemo(
    () => imageUrls.map<ImageWithKey>((imageUrl, index) => ({ url: imageUrl, key: index })),
    [imageUrls]
  );

  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

  const handleSelect = (key: number) => {
    setSelectedKeys((currKeys) => {
      const currKeysCopy = currKeys.slice();
      if (currKeysCopy.includes(key)) {
        currKeysCopy.splice(currKeysCopy.indexOf(key), 1);
        return currKeysCopy;
      }

      return [...currKeysCopy, key];
    });
  };

  return (
    <ImageList cols={3} rowHeight={164}>
      {images.map((image) => {
        const indexInSelected = selectedKeys.indexOf(image.key);
        const isSelected = indexInSelected > -1;

        return (
          <ImageListItem key={image.key} sx={{ margin: 0.82 }}>
            <Card
              sx={(theme) => ({
                ...(isSelected && { boxShadow: `0 0 0 3px ${theme.palette.primary.main}` }),
              })}
            >
              <BoxImage
                component={CardActionArea}
                size={168}
                src={image.url}
                onClick={() => handleSelect(image.key)}
              >
                {isSelected && <BoxSelect>{indexInSelected + 1}</BoxSelect>}
              </BoxImage>
            </Card>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export { ImagesGallery };
