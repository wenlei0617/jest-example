export const mockTestFunc = (fn: Function, execute: boolean) => {
  return execute ? fn(execute) : undefined;
}