export const getLocalStorage = () => {
  return localStorage.getItem('test');
}

export const setLocalStorage = (value: string) => {
  localStorage.setItem('test', value);
}

export const callPhone = () => {
  return window.bridage.callPhone();
}