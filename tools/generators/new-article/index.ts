import { Tree, formatFiles, generateFiles, joinPathFragments, names } from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
}

export default async (tree: Tree, schema: NewArticleSchemaOptions) => {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './apps/app/content/_articles', {
    title: schema.title,
    author: schema.author,
    normalizedTitle: names(schema.title).fileName,
    creationDate: new Date().toISOString(),
  });

  await formatFiles(tree);
};
