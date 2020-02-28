// Initializes the `itinerary` service on path `/itinerary`
// const createService = require('feathers-nedb');
const createModel = require('../../models/itinerary.model');
const hooks = require('./itinerary.hooks');
const createService = require('feathers-mongodb');

module.exports = function () {
    const app = this;
    // const Model = createModel(app);
    const paginate = app.get('paginate');
    const mongoClient = app.get('mongoClient');
    const Model = mongoClient.db('gipsi').collection('itinerary');
    const options = {
		Model,
		paginate
	};

    // Initialize our service with any options it requires
    app.use('/itinerary', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('itinerary');

    service.hooks(hooks);
};
