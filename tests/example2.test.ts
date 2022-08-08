import { asyncRejectFunc, asyncResolveFunc } from '../src/example2'

describe('async/await', () => {
  it('expect async resolve', async () => {
    const result = await asyncResolveFunc(1);
    expect(result).toBe(1);
  })

  it('expect async reject', async () => {
    try {
      await asyncRejectFunc('error')
    } catch (error) {
      expect(error).toEqual('error');
    }
  })
})

describe('resolves/rejects', () => {

  it('expect resolves', async () => {
    await expect(asyncResolveFunc(1)).resolves.toBe(1);
  });

  it('expect rejects', async () => {
    await expect(asyncRejectFunc('error')).rejects.toEqual('error');
  });
})

describe('done', () => {
  it('done resolve', (done) => {
    asyncResolveFunc(1).then((value) => {
      expect(value).toBe(1);
      done();
    })
  })

  it('done reject', (done) => {
    asyncRejectFunc('error').catch((value) => {
      expect(value).toEqual('error')
      done();
    })
  });
})