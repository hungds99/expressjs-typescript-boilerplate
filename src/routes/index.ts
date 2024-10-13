import { Application, Router } from 'express';
import { errorHandler } from '../middlewares';
import userRoutes from './users';

export default (app: Application) => {
  const apiRoute = Router();
  app.use('/api', apiRoute);

  // Routes
  userRoutes(apiRoute);

  // Error handling
  app.use(errorHandler());

  return app;
};
