import { NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import {
  AppAuthenticatedRequest,
  AppRequest,
  AppResponse,
} from '../types/http';

export default (): RequestHandler => {
  return (req: AppRequest, res: AppResponse, next: NextFunction): void => {
    const token = req.header('Authorization');
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    try {
      const req_ = req as AppAuthenticatedRequest;
      const decoded = jwt.verify(token, 'secret');
      req_.user = decoded as { id: string; email: string };
      next();
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Invalid token' });
    }

    return next();
  };
};
