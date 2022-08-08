import { setTimeoutFunc } from '../src/example3'

describe('setTimeout timeout', () => {
  it('setTimeoutFunc', async () => {
    // 启动假的定时器
    jest.useFakeTimers();
    const result = setTimeoutFunc();
    // 运行所有定时器
    jest.runAllTimers();
    expect(result).resolves.toEqual('success');
  })
})