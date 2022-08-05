import { wait } from './helper';

export const asyncResolveFunc = async (result: number) => {
  await wait(100);
  return Promise.resolve(result)
}

export const asyncRejectFunc = async (error: string) => {
  await wait(100);
  return Promise.reject(error);
}