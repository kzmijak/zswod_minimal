import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC, useState } from 'react';
import { SmartLink } from 'src/_zswod/components/SmartLink';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { displayDate } from 'src/_zswod/utils/displayDate';

type ArticlesGridItemProps = {
  articleHeader: ArticleHeaderModel;
};

const ArticlesGridItem: FC<ArticlesGridItemProps> = ({ articleHeader }) => {
  const { createTime, previewImage, short, title, titleNormalized } = articleHeader;
  const [isHovering, setIsHovering] = useState(false);

  const startHovering = () => setIsHovering(true);
  const stopHovering = () => setIsHovering(false);

  return (
    <SmartLink to={titleNormalized}>
      <Box onMouseOver={startHovering} onMouseLeave={stopHovering}>
        <Box
          height={300}
          sx={{
            borderRadius: 1,
            backgroundImage: `url('${previewImage.src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            height={'100%'}
            width={'100%'}
            sx={{
              borderRadius: 1,
              position: 'absolute',
              bgcolor: 'black',
              opacity: 0.3,
              zIndex: 2,
            }}
          />
          <Stack height={'100%'} justifyContent="flex-end" position="relative" zIndex={3}>
            <Stack alignItems="center" padding={2}>
              <Typography variant="h6" color={'common.white'} component={m.p}>
                {title}
              </Typography>
              <AnimatePresence>
                {isHovering && (
                  <Typography
                    component={m.p}
                    color={'common.white'}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {short}
                  </Typography>
                )}
              </AnimatePresence>
            </Stack>
            <Stack
              padding={2}
              width={'100%'}
              sx={(theme) => ({
                borderRadius: 1,
                background: `linear-gradient(0deg, ${theme.palette.common.black}, transparent)`,
              })}
            >
              <Typography variant="caption" align="right" color={'common.white'}>
                Opublikowano {displayDate(createTime)}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </SmartLink>
  );
};

export { ArticlesGridItem };
