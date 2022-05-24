import { getContentModuleDirPath, getObjectFromMarkdown, renderMarkdown } from '@seed/markdown';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

const mdxComponents = { Button: dynamic(async () => await import('@seed/ui-components/Button/Button')) };
import { ParsedUrlQuery } from 'querystring';

/* eslint-disable-next-line */
export interface HomePageProps extends ParsedUrlQuery {}

const CONTENT_MODULE_PATH = getContentModuleDirPath('_home');

export function Index({ frontMatter, html }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">{frontMatter.header}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <MDXRemote {...html} components={mdxComponents} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }: { locale: string }) => {
  const { frontMatter, content } = getObjectFromMarkdown(`${CONTENT_MODULE_PATH}/${locale}`, 'home-1');
  const html = await renderMarkdown(content);

  return {
    props: {
      frontMatter,
      html,
    },
  };
};

export default Index;
