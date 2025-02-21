import { Application, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/api-docs.json';
import { errorHandler } from '../middlewares';
import { env } from '../utils';
import userRoutes from './users';

export default (app: Application) => {
  const apiRoute = Router();
  app.use('/api', apiRoute);

  // Health check route
  apiRoute.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'OK' });
  });

  // API docs route
  if (env.NODE_ENV === 'development') {
    apiRoute.use('/docs', swaggerUi.serve);
    apiRoute.get('/docs', swaggerUi.setup(swaggerDocument));
  }

  // Routes
  userRoutes(apiRoute);

  // Error handling
  app.use(errorHandler());

  return app;
};
