// Initializes the `POICategory` service on path `/poi-category`
const createService = require('feathers-nedb');
const createModel = require('../../models/poi-category.model');
const hooks = require('./poi-category.hooks');
const filters = require('./poi-category.filters');

module.exports = function () {
	const app = this;
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		name: 'poi-category',
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/poi-category', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('poi-category');

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
