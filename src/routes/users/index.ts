import { Application, Router } from 'express';
import middlewares from '../../middlewares';
import { wrapHandler } from '../../utils';
import createUser from './create-user';
import deleteUser from './delete-user';
import getUser from './get-user';
import listUsers from './list-users';
import updateUser from './update-user';

const route = Router();

export default (app: Application) => {
  app.use('/users', route);

  route.get('/', middlewares.authenticate(), wrapHandler(listUsers));

  route.get('/:id', middlewares.authenticate(), wrapHandler(getUser));

  route.post('/', middlewares.authenticate(), wrapHandler(createUser));

  route.put('/:id', middlewares.authenticate(), wrapHandler(updateUser));

  route.delete('/:id', middlewares.authenticate(), wrapHandler(deleteUser));

  return app;
};
