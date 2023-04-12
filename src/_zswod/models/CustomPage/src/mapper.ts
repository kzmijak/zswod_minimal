import { arrayMapAttachmentDtoToModel } from '../../Attachment';
import { CustomPageDto } from './CustomPageDto';
import { CustomPageModel } from './CustomPageModel';

const mapCustomPageDtoToModel = ({
  attachments,
  content,
  title,
  updateTime,
}: CustomPageDto): CustomPageModel => ({
  attachments: arrayMapAttachmentDtoToModel(attachments),
  content,
  title,
  updateTime: new Date(updateTime).toISOString(),
});

export { mapCustomPageDtoToModel };
