import req from 'request-promise';

export default class Api {

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  endpoint(method, path, options = {}) {
    if (!this.baseURL) {
      throw new Error('baseURL is not set!');
    }
    // https://github.com/request/request
    // https://github.com/request/request-promise
    options = {
      uri: `${this.baseURL}${path}`,
      method,
      resolveWithFullResponse: true, // Access response.statusCode, response.body etc.
      json: true, // Automatically stringifies the body to JSON
      // Get a rejection or throw error only if the request failed for technical reasons
      simple: false, // Don't reject/throw error for non-200 responses
      ...options
    };
    return req(options);
  }
}

