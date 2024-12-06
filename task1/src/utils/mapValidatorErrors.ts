import { ValidationError } from 'class-validator';

export function mapValidationErrors(error: ValidationError): string {
  return Object.values(error.constraints!).join('\n');
}
