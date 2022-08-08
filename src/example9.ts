import { randomNumber } from './helper';

class LocalCache {
  cache: Record<string, string> = {};

  get(name: string) {
    return this.cache[name];
  }

  set(name: string, value: string | object) {
    this.cache[name] = this.transform(value);
  }

  private transform(value: string | object): string {
    let result = '';
    if (typeof value === 'object') {
      result = JSON.stringify(value);
    } else {
      result = value;
    }
    return `${result}-${randomNumber()}`
  }
}

export default LocalCache;