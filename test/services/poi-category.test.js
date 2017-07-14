const assert = require('assert');
const app = require('../../src/app');

describe('\'POICategory\' service', () => {
  it('registered the service', () => {
    const service = app.service('poi-category');

    assert.ok(service, 'Registered the service');
  });
});
