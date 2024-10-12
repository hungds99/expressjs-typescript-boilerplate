import { Request, Response } from 'express';
import { userService } from '../../services';

export default async (req: Request, res: Response) => {
  await userService.create('1212');
  res.status(200).json({ message: 'create-user' });
};
