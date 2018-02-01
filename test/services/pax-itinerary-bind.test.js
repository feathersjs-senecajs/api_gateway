const assert = require('assert');
const app = require('../../src/app');

describe('\'PaxItineraryBind\' service', () => {
  it('registered the service', () => {
    const service = app.service('pax-itinerary-bind');

    assert.ok(service, 'Registered the service');
  });
});
