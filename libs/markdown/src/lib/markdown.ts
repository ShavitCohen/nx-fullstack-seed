import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export const getAllFilesFromFolder = (path: string): string[] =>
  readdirSync(path).map((fileName: string) => fileName.replace(/\.mdx?$/g, ''));

export const getObjectFromMarkdown = (path: string, fileName: string) => {
  const markdownFilePath = join(path, `${fileName}.mdx`);
  const fileContent = readFileSync(markdownFilePath);
  const { data, content } = matter(fileContent);
  return {
    frontMatter: data,
    content,
  };
};

export const renderMarkdown = (content: string) => {
  return serialize(content || '');
};

export const getContentModuleDirPath = (moduleName: string) => join(process.cwd(), `apps/app/content/${moduleName}`);
