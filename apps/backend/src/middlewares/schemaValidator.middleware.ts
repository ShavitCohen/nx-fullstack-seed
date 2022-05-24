import { celebrate, SchemaOptions } from 'celebrate';

export const validator = (schema: SchemaOptions) => celebrate(schema, { abortEarly: false });
