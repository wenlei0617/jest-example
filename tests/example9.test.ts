import LocalCache from '../src/example9'
import * as helper from '../src/helper';

describe('LocalCache', () => {
  let randomNumberMock: jest.SpyInstance;
  beforeAll(() => {
    randomNumberMock = jest.spyOn(helper, 'randomNumber');
  })

  afterEach(() => {
    randomNumberMock.mockClear();
    randomNumberMock.mockReset();
    randomNumberMock.mockRestore();
  })
  it('transform string', () => {
    jest.spyOn(helper, 'randomNumber').mockReturnValue(10);
    const cache = new LocalCache();
    expect(cache['transform']('test')).toEqual('test-10');    
  });

  it('transform object', () => {
    jest.spyOn(helper, 'randomNumber').mockReturnValue(5);
    const cache = new LocalCache();
    expect(cache['transform']({a : 1})).toEqual(`${JSON.stringify({a: 1})}-5`);
  });

  it('mock private', () => {
    jest.spyOn(LocalCache as any, 'transform').mockReturnValue('1-1');
    const cache = new LocalCache;
    cache.set('test', '1')
    expect(cache.get('test')).toEqual('1-1');
  })
})