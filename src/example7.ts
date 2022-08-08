import { randomNumber } from './helper'

export const mockTestExternalFunc = () => {
  const result = randomNumber();
  return result % 2 ? 'odd' : 'even';
}