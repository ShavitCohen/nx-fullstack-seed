import { Request } from 'express';
import { Router } from 'express';
import { entity1Router } from './entity1';

export const apiRouter = Router();

export interface AuthenticatedRequest extends Request {
  auth: {
    userId: string;
    email: string;
    role: string;
    plan: string;
  };
}

apiRouter.use('/entity1', entity1Router);
