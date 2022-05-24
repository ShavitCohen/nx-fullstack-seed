import { Router } from 'express';
import { validator } from '../../middlewares/schemaValidator.middleware';
import { getEntity1 } from './entity1.controller';
import { getEntity1Schema } from './entity1.schema';

export const entity1Router = Router();

entity1Router.route('/').get(validator(getEntity1Schema), getEntity1);
