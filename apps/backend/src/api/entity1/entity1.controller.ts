import { Request, Response } from 'express';

export const getEntity1 = async (req: Request, res: Response) => {
  try {
    res.json({ entity1: 'YES' });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
