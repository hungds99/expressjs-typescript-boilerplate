import { Router } from 'express';
import authenticate from '../../middlewares/authenticate';
import { wrapHandler } from '../../utils';
import createUser from './create-user';
import deleteUser from './delete-user';
import getUser from './get-user';
import listUsers from './list-users';
import updateUser from './update-user';

export default (route: Router) => {
  const usersRoute = Router();
  route.use('/users', usersRoute);

  usersRoute.get('/', authenticate(), wrapHandler(listUsers));
  usersRoute.get('/:id', authenticate(), wrapHandler(getUser));
  usersRoute.post('/', authenticate(), wrapHandler(createUser));
  usersRoute.put('/:id', authenticate(), wrapHandler(updateUser));
  usersRoute.delete('/:id', authenticate(), wrapHandler(deleteUser));

  return route;
};
