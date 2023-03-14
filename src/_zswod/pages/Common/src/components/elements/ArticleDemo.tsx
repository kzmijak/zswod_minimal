import { alpha, Box, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { RouterLink } from 'src/_zswod/components/RouterLink';
import { getPreviewImage, selectLatestArticleHeader } from 'src/_zswod/modules/ArticleHeaders';
import { useBlobUrl } from 'src/_zswod/modules/Blob';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { useRootSelector } from 'src/_zswod/utils/useRootSelector';

const ArticleDemo: FC = () => {
  const header = useRootSelector(selectLatestArticleHeader);
  const { getUrl } = useBlobUrl();
  const [isMouseOver, setIsMouseOver] = useState(false);

  if (!Boolean(header)) return null;

  const previewImage = getPreviewImage(header);
  const { short, title, titleNormalized } = header!;

  if (!Boolean(previewImage)) return null;

  return (
    <Stack
      component={RouterLink}
      to={`${PATHS_ABOUT.nowosci.link}/${titleNormalized}`}
      minHeight="100%"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      sx={(theme) => ({
        position: 'relative',
        zIndex: 1,
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        ...(!isMouseOver && {
          boxShadow: `10px 5px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
        }),
        transition: 'all 0.9s',
      })}
      justifyContent="flex-end"
    >
      <Box zIndex={1} sx={{ padding: 3 }}>
        <Typography color="grey.700" variant="overline">
          Najnowszy artykuł
        </Typography>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{short}</Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${getUrl(previewImage!.blobId)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1.2px)',
          zIndex: 0,
          opacity: 0.8,
          ...(isMouseOver && {
            filter: 'none',
            opacity: 1,
          }),
          transition: 'all 0.2s',
        }}
      />
    </Stack>
  );
};

export { ArticleDemo };
