const assert = require('assert');
const app = require('../../src/app');

describe('\'PaxInfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('pax-info');

    assert.ok(service, 'Registered the service');
  });
});
