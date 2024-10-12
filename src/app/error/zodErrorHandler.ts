import { ZodError } from 'zod';
import { TErrorReturnValue } from '../interface/errorHandler.interface';
import httpStatus from 'http-status';

const zodErrorHandler = (error: ZodError): TErrorReturnValue => {
  const errorSources = error?.issues.map(issue => {
    return {
      path: issue?.path[issue?.path?.length - 1],
      message: issue?.message,
    };
  });

  return {
    errorSources,
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
  };
};

export default zodErrorHandler;
