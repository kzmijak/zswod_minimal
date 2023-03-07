import { BoxProps } from '@mui/material';
import { FC } from 'react';
import { LazyLoadImageProps } from 'react-lazy-load-image-component';
import Image from 'src/components/Image';

type TalentowiskoIconProps = BoxProps & LazyLoadImageProps;

const TalentowiskoIcon: FC<TalentowiskoIconProps> = (props) => (
  <Image {...props} alt="talentowisko ikona" src="/logo/talentowisko.png" />
);

export { TalentowiskoIcon };
