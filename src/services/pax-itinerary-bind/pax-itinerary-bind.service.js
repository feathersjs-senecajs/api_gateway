// Initializes the `PaxItineraryBind` service on path `/pax-itinerary-bind`
const createService = require('feathers-nedb');
const createModel = require('../../models/pax-itinerary-bind.model');
const hooks = require('./pax-itinerary-bind.hooks');
const filters = require('./pax-itinerary-bind.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pax-itinerary-bind',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pax-itinerary-bind', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pax-itinerary-bind');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};