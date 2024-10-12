import { Application, Router } from 'express';
import users from './users';

const route = Router();

export default (app: Application) => {
  app.use('/api', route);

  users(app);

  return app;
};
