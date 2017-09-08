// Initializes the `ItineraryBundle` service on path `/itinerary-bundle`
const createService = require('feathers-nedb');
const createModel = require('../../models/itinerary-bundle.model');
const hooks = require('./itinerary-bundle.hooks');
const filters = require('./itinerary-bundle.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'itinerary-bundle',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/itinerary-bundle', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('itinerary-bundle');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
