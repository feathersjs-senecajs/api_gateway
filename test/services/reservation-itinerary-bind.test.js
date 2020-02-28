const assert = require('assert');
const app = require('../../src/app');

describe('\'reservationItineraryBind\' service', () => {
  it('registered the service', () => {
    const service = app.service('reservation-itinerary-bind');

    assert.ok(service, 'Registered the service');
  });
});
