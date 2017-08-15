// Initializes the `PoiType` service on path `/poi-type`
const createService = require('feathers-nedb');
const createModel = require('../../models/poi-type.model');
const hooks = require('./poi-type.hooks');
const filters = require('./poi-type.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'poi-type',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/poi-type', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('poi-type');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
