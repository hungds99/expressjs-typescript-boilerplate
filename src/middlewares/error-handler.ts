import { NextFunction, Request, Response } from 'express';

export const errorHandler = () => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Something went wrong!!' });
  };
};
