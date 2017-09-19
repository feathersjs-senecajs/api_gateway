// Initializes the `reservationItineraryBind` service on path `/reservation-itinerary-bind`
const createService = require('./reservation-itinerary-bind.class.js');
const hooks = require('./reservation-itinerary-bind.hooks');
const filters = require('./reservation-itinerary-bind.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'reservation-itinerary-bind',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reservation-itinerary-bind', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('reservation-itinerary-bind');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
