import { LocalResult } from './baseresults';

export class SuccessResult extends LocalResult {
  constructor(message: string) {
    super(true, message);
  }
}
