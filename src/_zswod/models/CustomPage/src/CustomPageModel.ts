import { AttachmentModel } from '../../Attachment';

type CustomPageModel = {
  updateTime: string;
  title: string;
  content: string;
  attachments: AttachmentModel[];
};

export type { CustomPageModel };
