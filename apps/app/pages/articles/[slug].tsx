import { getAllFilesFromFolder, getContentModuleDirPath, getObjectFromMarkdown, renderMarkdown } from '@seed/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import dynamic from 'next/dynamic';

/* eslint-disable-next-line */
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const mdxComponents = { Button: dynamic(async () => await import('@seed/ui-components/Button/Button')) };
const CONTENT_MODULE_PATH = getContentModuleDirPath('_articles');

export const Article = ({ frontMatter, html }) => {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontMatter.title}</h1>
        <div>by {frontMatter.author.name}</div>
      </article>

      <hr />
      <MDXRemote {...html} components={mdxComponents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: { params: ArticleProps }) => {
  const { frontMatter, content } = getObjectFromMarkdown(CONTENT_MODULE_PATH, params.slug);
  const html = await renderMarkdown(content);

  return {
    props: {
      frontMatter,
      html,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = () => {
  const paths = getAllFilesFromFolder(CONTENT_MODULE_PATH).map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
