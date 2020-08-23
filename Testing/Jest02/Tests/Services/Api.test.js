import API from '../../App/Services/Api';

const api = API.create()
const API_TIMEOUT_DURATION = 10000 // in ms

describe('Test Api services', () => {
  test('Api getRate', async () => {
    const response = await api.getRate()

    const expectedObject = {
      limit: expect.any(Number),
      remaining: expect.any(Number),
      reset: expect.any(Number),
    }

    expect(response.ok).toEqual(true)
    expect(response.status).toEqual(200)
    expect(response.duration).toBeLessThanOrEqual(API_TIMEOUT_DURATION)
    expect(response.data).toBeDefined()
    expect(response.data).not.toBeNull()
    expect(response.data).toHaveProperty('rate', expect.objectContaining(expectedObject))
    expect(response.data).toHaveProperty('resources', expect.objectContaining({
      core: expect.objectContaining(expectedObject),
      graphql: expect.objectContaining(expectedObject),
      integration_manifest: expect.objectContaining(expectedObject),
      search: expect.objectContaining(expectedObject),
    }))
  });

  test('Api getUser', async () => {
    const response = await api.getUser("rahmat")

    expect(response.ok).toEqual(true)
    expect(response.status).toEqual(200)
    expect(response.duration).toBeLessThanOrEqual(API_TIMEOUT_DURATION)
    expect(response.data).toBeDefined()
    expect(response.data).not.toBeNull()
    expect(response.data).toHaveProperty('total_count', expect.any(Number))
    expect(response.data).toHaveProperty('incomplete_results', expect.any(Boolean))
    expect(response.data).toHaveProperty('item', expect.arrayContaining([expect.anything()]))
  });
});