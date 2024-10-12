import { Request, Response } from 'express';

export default () => {
  return (err: Error, req: Request, res: Response) => {
    console.log('Error handler middleware');
    res.status(500).json({ message: 'Internal server error' });
  };
};
