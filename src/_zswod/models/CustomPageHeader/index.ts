import { CustomPageHeaderDto } from './src/CustomPageHeaderDto';
import { CustomPageHeaderModel } from './src/CustomPageHeaderModel';
import { CustomPageHeaderItem, CustomPageHeaderSection } from './src/CustomPageHeaderNested';
import { arrayMapCustomPageHeaderDtoToModel } from './src/mapper';

export { arrayMapCustomPageHeaderDtoToModel };
export type {
  CustomPageHeaderModel,
  CustomPageHeaderDto,
  CustomPageHeaderSection,
  CustomPageHeaderItem,
};
