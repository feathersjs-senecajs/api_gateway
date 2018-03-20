// Initializes the `pax` service on path `/pax`
//const createService = require('feathers-nedb');
const createModel = require('../../models/pax.model');
const hooks = require('./pax.hooks');
const filters = require('./pax.filters');
const createService = require('feathers-mongodb');

module.exports = function () {
	const app = this;
	//  const Model = createModel(app);
	const paginate = app.get('paginate');
	const mongoClient = app.get('mongoClient');
	const Model = mongoClient.db('gipsi').collection('pax');
	const options = {
		Model,
		paginate
	};


	// Initialize our service with any options it requires
	app.use('/pax', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('pax');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
