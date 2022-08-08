import { setTimeoutFunc } from '../src/example3'

describe('setTimeout timeout', () => {
  it('setTimeoutFunc', async () => {
    const result = await setTimeoutFunc();
    expect(result).toEqual('success');
  })
})