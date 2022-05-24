import { CmsCollection } from 'netlify-cms-core';
import { mdx, pageHeadSEO } from '../common';

const FOLDER_NAME = '_entities';

export const entitiesCollection: CmsCollection = {
  name: 'entities',
  label: 'Entities',
  label_singular: 'Entity',
  slug: '{{name}}',
  description: `A general data regarding the entity`,
  folder: `apps/app/content/${FOLDER_NAME}`,
  summary: '{{name}} -- {{year}}/{{month}}/{{day}}',
  i18n: true,
  create: true,
  ...mdx,
  view_filters: [
    {
      label: 'Drafts',
      field: 'draft',
      pattern: '',
    },
  ],
  view_groups: [
    {
      label: 'Year',
      field: 'date',
      pattern: 'd{4}',
    },
    {
      label: 'Drafts',
      field: 'draft',
    },
  ],
  fields: [
    ...pageHeadSEO,
    { label: 'Entity Name', name: 'name', widget: 'string', i18n: true },
    { label: 'Draft', name: 'draft', widget: 'boolean', default: false, i18n: 'duplicate' },
    { label: 'Website Address', name: 'websiteAddress', widget: 'string', i18n: 'duplicate' },
    { label: 'Cover Image', name: 'image', widget: 'image', required: false, i18n: 'duplicate' },
    { label: 'Body', name: 'body', widget: 'markdown', hint: 'Main content goes here.', i18n: true },
  ],
};
