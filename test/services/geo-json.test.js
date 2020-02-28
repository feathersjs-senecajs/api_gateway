const assert = require('assert');
const app = require('../../src/app');

describe('\'geoJSON\' service', () => {
  it('registered the service', () => {
    const service = app.service('geo-json');

    assert.ok(service, 'Registered the service');
  });
});
