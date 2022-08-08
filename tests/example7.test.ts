import { mockTestExternalFunc } from '../src/example7';
import * as helper from '../src/helper';

jest.mock('../src/helper.ts');

describe('mockTestExternalFunc', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  })
  it('even', () => {
    const fn = (helper.randomNumber as jest.Mock)
    fn.mockReturnValue(10)
    expect(mockTestExternalFunc()).toEqual('even');
    expect(fn).toBeCalledTimes(1);
  });

  it('odd', () => {
    const fn =(helper.randomNumber as jest.Mock)
    fn.mockReturnValue(9)
    expect(mockTestExternalFunc()).toEqual('odd');
    expect(fn).toBeCalledTimes(1);
  })
})