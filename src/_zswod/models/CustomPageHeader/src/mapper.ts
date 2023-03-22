import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { mapStringToIcon } from '../../enums/Icon';
import { CustomPageHeaderDto } from './CustomPageHeaderDto';
import { CustomPageHeaderModel } from './CustomPageHeaderModel';

const mapCustomPageHeaderDtoToModel = ({
  icon,
  title,
  titleNormalized,
  order,
  link,
  section,
}: CustomPageHeaderDto): CustomPageHeaderModel => ({
  icon: mapStringToIcon(icon),
  order,
  title,
  titleNormalized,
  link,
  section,
});

const arrayMapCustomPageHeaderDtoToModel = createArrayMapper(mapCustomPageHeaderDtoToModel);

export { arrayMapCustomPageHeaderDtoToModel };
