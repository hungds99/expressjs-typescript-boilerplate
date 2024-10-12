import { NextFunction, Request, RequestHandler, Response } from 'express';
// import jwt from 'jsonwebtoken';

export default (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log('Authenticate middleware');
    // const token = req.header('Authorization');
    // if (!token) {
    //   res.status(401).json({ message: 'Unauthorized' });
    //   return;
    // }

    // try {
    //   jwt.verify(token, 'secret');
    //   // req.user = decoded;
    //   next();
    // } catch (error) {
    //   console.error(error);
    //   res.status(400).json({ message: 'Invalid token' });
    // }

    return next();
  };
};
