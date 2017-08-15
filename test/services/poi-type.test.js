const assert = require('assert');
const app = require('../../src/app');

describe('\'PoiType\' service', () => {
  it('registered the service', () => {
    const service = app.service('poi-type');

    assert.ok(service, 'Registered the service');
  });
});
