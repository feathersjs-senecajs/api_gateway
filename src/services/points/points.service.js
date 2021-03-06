// Initializes the `points` service on path `/points`
// const createService = require('feathers-nedb');
const createModel = require('../../models/points.model');
const hooks = require('./points.hooks');
const createService = require('feathers-mongodb');

module.exports = function () {
    const app = this;
    //const Model = createModel(app);
    const paginate = app.get('paginate');
    const mongoClient = app.get('mongoClient')
    const Model = mongoClient.db('gipsi').collection('points');
    const options = {
		Model,
		paginate,
		events: ['set']
	};

    // Initialize our service with any options it requires
    app.use('/points', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('points');

    service.hooks(hooks);
};
