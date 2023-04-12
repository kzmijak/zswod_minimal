import { AttachmentDto } from '../../Attachment';

type CustomPageDto = {
  updateTime: string;
  title: string;
  content: string;
  attachments: AttachmentDto[];
};

export type { CustomPageDto };
