// Initializes the `reservation` service on path `/reservation`
// const createService = require('feathers-nedb');
const createModel = require('../../models/reservation.model');
const hooks = require('./reservation.hooks');
const filters = require('./reservation.filters');
const createService = require('feathers-mongodb');

module.exports = function () {
  const app = this;
  //const Model = createModel(app);
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient')
  const options = {
	  paginate
  };

  // Initialize our service with any options it requires
  app.use('/reservation', createService(options));

  // Get our initialized service so that we can register hooks and filters
	const service = app.service('reservation');

	mongoClient.then(client => {
		service.Model = client.db('gipsi').collection('reservation');
	});

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
