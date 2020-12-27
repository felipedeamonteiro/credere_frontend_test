import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
// Validation Errorfunction to help handle errors in the application
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
