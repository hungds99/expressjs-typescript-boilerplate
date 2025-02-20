import { Response } from 'express';
import { APIAuthenticatedRequest, APIResponse } from '../../types';

export default async (
  req: APIAuthenticatedRequest,
  res: Response<APIResponse>
) => {
  const response: APIResponse = {
    data: { message: 'Welcome to the public API!' },
    message: 'Success',
    statusCode: 200,
  };
  res.status(200).json(response);
};
