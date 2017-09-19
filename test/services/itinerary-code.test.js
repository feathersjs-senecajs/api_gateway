const assert = require('assert');
const app = require('../../src/app');

describe('\'itineraryCode\' service', () => {
  it('registered the service', () => {
    const service = app.service('itinerary-code');

    assert.ok(service, 'Registered the service');
  });
});
