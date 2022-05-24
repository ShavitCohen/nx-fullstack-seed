import { getAllFilesFromFolder, getContentModuleDirPath, getObjectFromMarkdown, renderMarkdown } from '@seed/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import dynamic from 'next/dynamic';

/* eslint-disable-next-line */
export interface EntitiesProps extends ParsedUrlQuery {
  slug: string;
}
const mdxComponents = { Button: dynamic(async () => await import('@seed/ui-components/Button/Button')) };
const CONTENT_MODULE_PATH = getContentModuleDirPath('_entities');

export const Entities = ({ frontMatter, html }) => {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter?.name}</h1>
        <div>by {frontMatter?.keyWords}</div>
      </article>

      <hr />
      <MDXRemote {...html} components={mdxComponents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }: { params: EntitiesProps; locale: string }) => {
  const { frontMatter, content } = getObjectFromMarkdown(`${CONTENT_MODULE_PATH}/${locale}`, params.slug);

  const html = await renderMarkdown(content);
  return {
    props: {
      frontMatter,
      html,
    },
  };
};

export const getStaticPaths: GetStaticPaths<EntitiesProps> = ({ locales }) => {
  const paths = locales
    .map(locale =>
      getAllFilesFromFolder(`${CONTENT_MODULE_PATH}/${locale}`).map(slug => ({ params: { slug }, locale })),
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export default Entities;
