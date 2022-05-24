import { CmsCollection } from 'netlify-cms-core';
import { mdx, pageHeadSEO } from '../common';

const FOLDER_NAME = '_home';

export const homeCollection: CmsCollection = {
  name: 'home',
  label: 'Home',
  label_singular: 'Home',
  slug: 'home',
  description: `A general data regarding a the entity`,
  folder: `apps/app/content/${FOLDER_NAME}`,
  summary: 'home',
  i18n: true,
  create: false,
  ...mdx,
  fields: [
    ...pageHeadSEO,
    { label: 'Header', name: 'heroHeader', widget: 'string', i18n: true },
    { label: 'Description', name: 'description', widget: 'string', i18n: true },
    { label: 'Sub Header', name: 'subHeader', widget: 'string', i18n: true },
    { label: 'Image1', name: 'image1', widget: 'image', required: false, i18n: 'duplicate' },
    { label: 'Image2', name: 'image2', widget: 'image', required: false, i18n: 'duplicate' },
    { label: 'Body', name: 'body', widget: 'markdown', hint: 'Main content goes here.', i18n: true },
  ],
};
