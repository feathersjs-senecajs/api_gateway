// Initializes the `ItineraryBundle` service on path `/itinerary-bundle`
const createService = require('./itinerary-bundle.class');
const createModel = require('../../models/itinerary-bundle.model');
const hooks = require('./itinerary-bundle.hooks');
const fs = require('fs');

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
    app.use('/itinerary-bundle', createService(options), (req, res, next) => { 
		res.download('uploads/example.zip');
	});

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('itinerary-bundle');

    service.hooks(hooks);
};
