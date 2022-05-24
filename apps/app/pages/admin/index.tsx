import dynamic from 'next/dynamic';
import { cmsConfig } from '../../adminConfig/cmsConfig';
/* eslint-disable-next-line */
export interface AdminProps {}

const dynamicFunction = () =>
  import('netlify-cms-app').then(async (cms: any) => {
    return cms.init({ config: cmsConfig });
  });

const CMS = dynamic(dynamicFunction, { ssr: false, loading: () => <p>Loading Admin...</p> });

export function Admin(props: AdminProps) {
  return <CMS />;
}

export default Admin;
