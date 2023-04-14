import { arrayMapAttachmentDtoToModel } from '../../Attachment';
import { CustomPageDto } from './CustomPageDto';
import { CustomPageModel } from './CustomPageModel';

const mapCustomPageDtoToModel = ({
  id,
  attachments,
  content,
  title,
  updateTime,
  section,
  url,
}: CustomPageDto): CustomPageModel => ({
  id,
  attachments: arrayMapAttachmentDtoToModel(attachments),
  content,
  title,
  section,
  url,
  updateTime: new Date(updateTime).toISOString(),
});

export { mapCustomPageDtoToModel };
