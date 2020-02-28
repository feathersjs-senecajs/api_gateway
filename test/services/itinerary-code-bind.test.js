const assert = require('assert');
const app = require('../../src/app');

describe('\'ItineraryCodeBind\' service', () => {
  it('registered the service', () => {
    const service = app.service('itinerary-code-bind');

    assert.ok(service, 'Registered the service');
  });
});
