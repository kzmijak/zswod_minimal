import { AttachmentModel } from '../../Attachment';

type CustomPageModel = {
  id: string;
  updateTime: string;
  title: string;
  content: string;
  section: string;
  url: string;
  attachments: AttachmentModel[];
};

export type { CustomPageModel };
