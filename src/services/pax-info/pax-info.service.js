// Initializes the `PaxInfo` service on path `/pax-info`
// const createService = require('feathers-nedb');
const createModel = require('../../models/pax-info.model');
const hooks = require('./pax-info.hooks');
const filters = require('./pax-info.filters');
const createService = require('feathers-mongodb');

module.exports = function () {
	const app = this;
	//const Model = createModel(app);
	const paginate = app.get('paginate');
	const mongoClient = app.get('mongoClient');
	const options = { paginate };

	// Initialize our service with any options it requires
	app.use('/pax-info', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('pax-info');

	mongoClient.then(client => {
		service.Model = client.db('gipsi').collection('pax-info');
	});
	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
