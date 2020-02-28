const assert = require('assert');
const app = require('../../src/app');

describe('\'ItineraryBundle\' service', () => {
  it('registered the service', () => {
    const service = app.service('itinerary-bundle');

    assert.ok(service, 'Registered the service');
  });
});
