import { asyncLoopTime } from '../src/example5';

describe('asyncLoopTime', () => {

  // it('runOnlyPendingTimers error', () => {
  //   jest.useFakeTimers();
  //   const fn = jest.fn();
  //   asyncLoopTime(fn);
  //   jest.runOnlyPendingTimers();
  //   expect(fn).toBeCalled();
  // });

  it('runOnlyPendingTimers success', async () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    asyncLoopTime(fn);
    jest.runOnlyPendingTimers();
    await Promise.resolve();
    expect(fn).toBeCalled();
  });
})