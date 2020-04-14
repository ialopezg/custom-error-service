import { CustomError } from '../CustomError';

/**
 * NotFound Error. The requested resource could not be found but may be available again in the future.
 */
export class NotFound extends CustomError {
  name = 'NotFoundError';

  constructor(message?: string) {
    super(404, message || 'Not found');

    this.detail = 'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.';
  }
}
