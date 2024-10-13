import { NextFunction, Request, RequestHandler, Response } from 'express';

type handler = (req: Request, res: Response) => Promise<void>;

export const wrapHandler = (fn: handler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const req_ = req as Request & { errors?: Error[] };
    if (req_?.errors?.length) {
      res.status(400).json({
        errors: req_.errors,
        message:
          'Provided request body contains errors. Please check the data and retry the request',
      });
      return;
    }

    try {
      return await fn(req, res);
    } catch (err) {
      console.log('NEXT ERROR HANDLER');
      next(err);
    }
  };
};
