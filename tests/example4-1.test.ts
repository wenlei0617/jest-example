import { loopTime } from '../src/example4';

describe('loopTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  })

  it('runOnlyPendingTimers', () => {
    const fn = jest.fn();
    loopTime(fn);
    jest.runOnlyPendingTimers();
    expect(fn).toBeCalled();
  });

  it('advanceTimersByTime', async () => {
    const fn = jest.fn();
    loopTime(fn);
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(2);
  })
})