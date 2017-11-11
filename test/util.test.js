import { determinePortFromConfig } from '../lib/util';

test('get port from config.environment', async () => {
  const config = {
    "environment": {
      "LSAAPI_PORT": 8197,
      "LSAAPI_MODE": "prod",
    }
  };
  const port = determinePortFromConfig(config);
  // https://facebook.github.io/jest/docs/en/expect.html
  expect(port).toBe(8197);
});

test('get port from config.programArgs', async () => {
  const config = {
    "programArgs": [
       "-port:4445",
       "-test::false"
    ],
  };
  const port = determinePortFromConfig(config);
  // https://facebook.github.io/jest/docs/en/expect.html
  expect(port).toBe(4445);
});

test('get port from config.jvmArgs', async () => {
  const config = {
	"jvmArgs": [
      "-Dcom.rts.PRINTAPI_HOME=.",
      "-Dcom.rts.PRINTAPI_PORT=8184",
    ],
  };
  const port = determinePortFromConfig(config);
  // https://facebook.github.io/jest/docs/en/expect.html
  expect(port).toBe(8184);
});

