export const asyncLoopTime = (callback: Function) => {
  setTimeout(() => {
    Promise.resolve().then(() => {
      callback();
      asyncLoopTime(callback)
    })
  }, 1000)
}