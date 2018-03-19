// Initializes the `ItineraryCodeBind` service on path `/itinerary-code-bind`
//const createService = require('feathers-nedb');
const createModel = require('../../models/itinerary-code-bind.model');
const hooks = require('./itinerary-code-bind.hooks');
const filters = require('./itinerary-code-bind.filters');
const createService = require('feathers-mongodb');

module.exports = function () {
	const app = this;
	//const Model = createModel(app);
	const paginate = app.get('paginate');
	const mongoClient = app.get('mongoClient');
	const options = { paginate };


	// Initialize our service with any options it requires
	app.use('/itinerary-code-bind', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('itinerary-code-bind');

	mongoClient.then(client => {
		service.Model = client.db('gipsi').collection('itinerary_code_bind');
	});
	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
