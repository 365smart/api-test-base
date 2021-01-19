import { expect, test } from '@jest/globals';
import Api from '../lib/Api';

const api = new Api('http://invalid_host');

// https://facebook.github.io/jest/docs/en/api.html
// https://facebook.github.io/jest/docs/en/api.html#testname-fn
test('Invalid endpoint', async () => {
  try {
    let response = await api.endpoint('GET', '/invalid_endpoint');
  } catch (e) {
    // https://facebook.github.io/jest/docs/en/expect.html
    expect(e.name).toBe('RequestError');
  }
});

