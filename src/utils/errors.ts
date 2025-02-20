export const APIErrorTypes = {
  INVALID_REQUEST: 'INVALID_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
};

export const APIErrorCodes = {
  INVALID_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export class APIError extends Error {
  public type: string;
  public message: string;
  public code?: string;
  public date: Date;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, type: string, code?: string, ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, APIError);
    }

    this.message = message;
    this.type = type;
    this.code = code;
    this.date = new Date();
  }
}
