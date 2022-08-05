import { asyncRejectFunc, asyncResolveFunc } from '../src/example2'

describe('async', () => {

  it('expect resolves', () => {
    expect(asyncResolveFunc(1)).resolves.toBe(1);
  });

  it('expect async resolve', async () => {
    const result = await asyncResolveFunc(1);
    expect(result).toBe(1);
  })

  it('done resolve', (done) => {
    asyncResolveFunc(1).then((value) => {
      expect(value).toBe(1);
      done();
    })
  })

  it('expect rejects', () => {
    expect(asyncRejectFunc('error')).rejects.toEqual('error');
  });

  it('expect async reject', async () => {
    try {
      await asyncRejectFunc('error')      
    } catch (error) {
      expect(error).toEqual('error');
    }
  })

  it('done reject', (done) => {
    asyncRejectFunc('error').catch((value) => {
      expect(value).toEqual('error')
      done();
    })
  });
})