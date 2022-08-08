import { callPhone, getLocalStorage, setLocalStorage } from '../src/example8'

describe('localStroage', () => {
  let callPhoneMock = jest.fn();
  beforeAll(() => {
    Object.defineProperty(window, 'bridage', {
      writable: true,
      value: {
        callPhone: callPhoneMock
      }
    });
  });

  afterEach(() => {
    callPhoneMock.mockClear();
    callPhoneMock.mockReset();
  })

  it('set 1, get 1', () => {
    setLocalStorage('1');
    expect(getLocalStorage()).toBe('1');
  });

  it('callPhone', () => {
    callPhoneMock.mockReturnValue('10086')
    expect(callPhone()).toEqual('10086')
    expect(callPhoneMock).toBeCalled();
  });
})