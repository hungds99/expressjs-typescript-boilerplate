import { Request } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface APIRequest<T = any> extends Request {
  body: T; // The request body, you can use a generic type to specify it
  query: Record<string, string | string[]>; // Query parameters as a key-value map
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface APIResponse<T = any> {
  data?: T; // The main payload of the response
  message: string; // A user-friendly message
  statusCode: number; // HTTP status code
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface APIAuthenticatedRequest<T = any> extends APIRequest<T> {
  user?: {
    id: string; // or number, depending on how you identify users
    username: string;
    email: string;
    // Add other fields relevant to your authentication model
  };
}
