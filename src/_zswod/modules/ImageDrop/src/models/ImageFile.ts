type ImageFile = File & {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
};

export type { ImageFile };
