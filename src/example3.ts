import { wait } from './helper';

export const setTimeoutFunc = async () => {
  await wait(1000 * 5 * 60);
  return Promise.resolve('success')
}