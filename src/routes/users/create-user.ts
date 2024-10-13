import { userService } from '../../services';
import { AppAuthenticatedRequest, AppResponse } from '../../types';

export default async (req: AppAuthenticatedRequest, res: AppResponse) => {
  await userService.create('1212');
  res.status(200).json({ message: 'create-user' });
};
