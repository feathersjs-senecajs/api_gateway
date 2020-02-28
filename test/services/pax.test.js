const assert = require('assert');
const app = require('../../src/app');

describe('\'pax\' service', () => {
  it('registered the service', () => {
    const service = app.service('pax');

    assert.ok(service, 'Registered the service');
  });
});
