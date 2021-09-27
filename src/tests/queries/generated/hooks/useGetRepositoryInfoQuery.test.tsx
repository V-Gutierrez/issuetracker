import { getHookWrapper, queryMock } from 'tests/mocks';

describe('useGetRepositoryInfoQuery hook test', () => {

  it('should return specified repository info', async () => {
    const { result, waitForNextUpdate } = getHookWrapper();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeDefined();

    expect(result.current.data.repository.nameWithOwner).toEqual(queryMock[0].result.data.repository.nameWithOwner)
  });

  it('should return error if repository does not exist', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([]);

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeDefined();
    expect(result.current.data).toBeUndefined();

  });
});