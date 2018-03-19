// // Initializes the `PoiEvent` service on path `/poi-event`
// const createService = require('feathers-nedb');
// const createModel = require('../../models/poi-event.model');
// const hooks = require('./poi-event.hooks');
// const filters = require('./poi-event.filters');

// module.exports = function () {
//   const app = this;
//   const Model = createModel(app);
//   const paginate = app.get('paginate');

//   const options = {
//     name: 'poi-event',
//     Model,
//     paginate
//   };

//   // Initialize our service with any options it requires
//   app.use('/poi-event', createService(options));

//   // Get our initialized service so that we can register hooks and filters
//   const service = app.service('poi-event');

//   service.hooks(hooks);

//   if (service.filter) {
//     service.filter(filters);
//   }
// };



// Initializes the `PoiEvent` service on path `/poi-event`
// const createService = require('feathers-nedb');
const createModel = require('../../models/poi-event.model');
const hooks = require('./poi-event.hooks');
const filters = require('./poi-event.filters');
const createService = require('feathers-mongodb');

module.exports = function () {
	const app = this;
	// const Model = createModel(app);
	const paginate = app.get('paginate');
	const mongoClient = app.get('mongoClient');
	const options = { paginate };

	//   const options = {
	//     name: 'poi-event',
	//     Model,
	//     paginate
	//   };

	// Initialize our service with any options it requires
	app.use('/poi-event', createService(options));

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('poi-event');

	mongoClient.then(client => {
		service.Model = client.db('gipsi').collection('poi_events');
	});

	service.hooks(hooks);

	if (service.filter) {
		service.filter(filters);
	}
};
