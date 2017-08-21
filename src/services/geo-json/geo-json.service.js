// Initializes the `geoJSON` service on path `/geo-json`
const createService = require('feathers-nedb');
const createModel = require('../../models/geo-json.model');
const hooks = require('./geo-json.hooks');
const filters = require('./geo-json.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'geo-json',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/geo-json', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('geo-json');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
