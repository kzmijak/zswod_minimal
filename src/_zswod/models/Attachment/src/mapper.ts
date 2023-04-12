import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { mapStringToIcon } from '../../enums/Icon';
import { AttachmentDto } from './AttachmentDto';
import { AttachmentModel } from './AttachmentModel';

const mapAttachmentDtoToModel = ({
  description,
  iconId,
  id,
  title,
}: AttachmentDto): AttachmentModel => ({
  description,
  iconId: mapStringToIcon(iconId),
  id,
  title,
});

const arrayMapAttachmentDtoToModel = createArrayMapper(mapAttachmentDtoToModel);

export { mapAttachmentDtoToModel, arrayMapAttachmentDtoToModel };
