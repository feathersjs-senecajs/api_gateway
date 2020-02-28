const assert = require('assert');
const app = require('../../src/app');

describe('\'PoiEvent\' service', () => {
  it('registered the service', () => {
    const service = app.service('poi-event');

    assert.ok(service, 'Registered the service');
  });
});
