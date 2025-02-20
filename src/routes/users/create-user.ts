import { Response } from 'express';
import { userService } from '../../services';
import { APIAuthenticatedRequest, APIResponse } from '../../types';

export default async (
  req: APIAuthenticatedRequest,
  res: Response<APIResponse>
): Promise<void> => {
  await userService.create('1212');

  const response: APIResponse = {
    data: { message: 'Welcome to the public API!' },
    message: 'Success',
    statusCode: 200,
  };

  res.status(200).json(response);
};
