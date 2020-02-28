// Initializes the `Role` service on path `/role`
// const createService = require('feathers-nedb');
const createModel = require('../../models/role.model');
const hooks = require('./role.hooks');
const createService = require('feathers-mongodb');

module.exports = function () {
    const app = this;
    //const Model = createModel(app);
    const paginate = app.get('paginate');
    const mongoClient = app.get('mongoClient');
    const Model = mongoClient.db('gipsi').collection('role');
    const options = {
		Model,
		paginate
	};

    // Initialize our service with any options it requires
    app.use('/role', createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service('role');
    // mongoClient.then(client => {
    // 	service.Model = client.db('gipsi').collection('role');
    // });
    service.hooks(hooks);
};
