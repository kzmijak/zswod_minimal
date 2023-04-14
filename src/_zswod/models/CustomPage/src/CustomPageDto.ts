import { AttachmentDto } from '../../Attachment';

type CustomPageDto = {
  id: string;
  updateTime: string;
  section: string;
  url: string;
  title: string;
  content: string;
  attachments: AttachmentDto[];
};

export type { CustomPageDto };
