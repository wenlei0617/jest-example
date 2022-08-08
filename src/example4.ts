export const loopTime = (callback: Function) => {
  setTimeout(() => {
    callback();
    loopTime(callback);
  }, 1000)
}