import { mockTestFunc } from '../src/example6'

describe('mockTestFunc', () => {
  it('execute true', () => {
    const fn = jest.fn();
    mockTestFunc(fn, true);
    expect(fn).toBeCalled();
    expect(fn.mock.calls[0][0]).toBeTruthy();
  });

  it('execute false', () => {
    const fn = jest.fn();
    const result = mockTestFunc(fn, false);
    expect(fn).not.toBeCalled();
    expect(result).toBeUndefined();
  })
})