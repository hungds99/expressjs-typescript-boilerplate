import { Request, Response } from 'express';

export interface AppRequest extends Request {
  custom?: Record<string, unknown>;
}

export interface AppAuthenticatedRequest extends AppRequest {
  user: {
    id: string;
    email: string;
  };
}

export interface AppResponse extends Response {
  custom?: Record<string, unknown>;
}
