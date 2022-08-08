import { mockTestExternalFunc } from '../src/example7';
import * as helper from '../src/helper';

describe('mockTestExternalFunc', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })
  it('even', () => {
    const fn = jest.spyOn(helper, 'randomNumber')
    fn.mockReturnValue(10);
    expect(mockTestExternalFunc()).toEqual('even');
    expect(fn).toBeCalledTimes(1);
  });

  it('odd', () => {
    const fn = jest.spyOn(helper, 'randomNumber')
    fn.mockReturnValue(9);
    expect(mockTestExternalFunc()).toEqual('odd');
    expect(fn).toBeCalledTimes(1);
  })
})