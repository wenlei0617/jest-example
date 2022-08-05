export const wait = (time: number, isReject: boolean = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isReject ? reject('error') : resolve(time)
    }, time);
  })
}