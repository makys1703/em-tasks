import {
  PrismaClientValidationError,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError
} from '@prisma/client/runtime/library';

export function prismaErrorHandler(error: unknown) {
  console.log('PrismaErrorHandler -> catched');

  if (
    error instanceof PrismaClientValidationError ||
    error instanceof PrismaClientKnownRequestError ||
    error instanceof PrismaClientUnknownRequestError
  ) {
    console.error(error.message);
  }
}
