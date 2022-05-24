import { CmsBackend, CmsI18nConfig, CmsField, CmsCollectionFormatType } from 'netlify-cms-core';
import { locales, defaultLocale } from './locales';

const REPO_NAME = 'ShavitCohen/seed';

export const backend: CmsBackend = {
  name: 'github',
  repo: REPO_NAME,
  branch: 'main',
  squash_merges: true,
};

export const i18n: CmsI18nConfig = {
  structure: 'multiple_folders',
  locales: locales,
  default_locale: defaultLocale,
};

const format: CmsCollectionFormatType = 'frontmatter';

export const mdx = {
  extension: 'mdx',
  format,
};

export const pageHeadSEO: CmsField[] = [
  {
    label: 'SEO Settings',
    name: 'pageSEO',
    widget: 'object',
    collapsed: true,
    i18n: true,
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        required: false,
        i18n: true,
      },
      {
        label: 'Meta Description',
        name: 'description',
        widget: 'text',
        required: false,
        i18n: true,
      },
      {
        label: 'Key Words',
        name: 'keyWords',
        widget: 'string',
        required: false,
        i18n: true,
      },
      {
        label: 'OGG:Image',
        name: 'image',
        widget: 'image',
        required: false,
        default: '/img/shareable-default.jpg',
        i18n: 'duplicate',
      },
    ],
  },
];
