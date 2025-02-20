import { Router } from 'express';
import { authenticate } from '../../middlewares';
import createUser from './create-user';
import deleteUser from './delete-user';
import getUser from './get-user';
import listUsers from './list-users';
import updateUser from './update-user';

export default (route: Router) => {
  const usersRoute = Router();
  route.use('/users', usersRoute);

  // usersRoute.use(authenticate);

  usersRoute.get('/', listUsers);
  usersRoute.get('/:id', getUser);
  usersRoute.post('/', createUser);
  usersRoute.put('/:id', updateUser);
  usersRoute.delete('/:id', deleteUser);

  return route;
};
