import { loopTime } from '../src/example4';

describe('loopTime', () => {
  it('loopTime', async () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    loopTime(fn);
    jest.runAllTimers();
    expect(fn).toBeCalled();
  })
})