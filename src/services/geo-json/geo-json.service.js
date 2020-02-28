// Initializes the `geoJSON` service on path `/geo-json`
// const createService = require('feathers-nedb');
const createModel = require('../../models/geo-json.model');
const hooks = require('./geo-json.hooks');
const createService = require('feathers-mongodb');

module.exports = function () {
    const app = this;
    //const Model = createModel(app);
    const paginate = app.get('paginate');
    const mongoClient = app.get('mongoClient');
    const Model = mongoClient.db('gipsi').collection('geo_json');
    const options = {
		Model,
		paginate
	};

    // Initialize our service with any options it requires
    app.use('/geo-json', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('geo-json');

    service.hooks(hooks);
};
