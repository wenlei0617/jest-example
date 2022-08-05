import { add } from '../src/example1';

describe('add', () => {
  it('1 + 1', () => {
    expect(add(1, 1)).toEqual(2);
  })
})