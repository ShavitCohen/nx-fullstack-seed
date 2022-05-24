import { CmsConfig, CmsCollection } from 'netlify-cms-core';
import { backend, i18n } from './common';
import { entitiesCollection, homeCollection } from './collections';
const collections: CmsCollection[] = [entitiesCollection, homeCollection];

const SITE_URL = 'https://www.your-url.com';

export const cmsConfig: CmsConfig = {
  backend,
  i18n,
  site_url: SITE_URL,
  //publish_mode: 'editorial_workflow',
  media_folder: 'apps/app/content/uploads',
  public_folder: '/uploads',
  collections,
};
