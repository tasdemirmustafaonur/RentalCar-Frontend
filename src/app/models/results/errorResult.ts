import { LocalResult } from './baseresults';

export class ErrorResult extends LocalResult {
  constructor(message: string) {
    super(false, message);
  }
}
