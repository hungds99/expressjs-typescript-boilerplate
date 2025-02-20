import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { APIAuthenticatedRequest, APIRequest } from '../types';

export const authenticate = (
  req: APIRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization');
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, 'secret');

    // Attach the user object to the request
    (req as APIAuthenticatedRequest).user = decoded as {
      id: string;
      username: string;
      email: string;
    }; // Customize based on your JWT payload

    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid token' });
  }

  return next();
};
