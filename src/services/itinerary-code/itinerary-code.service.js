// Initializes the `itineraryCode` service on path `/itinerary-code`
const createService = require('feathers-nedb');
const createModel = require('../../models/itinerary-code.model');
const hooks = require('./itinerary-code.hooks');
const filters = require('./itinerary-code.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'itinerary-code',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/itinerary-code', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('itinerary-code');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
