// Initializes the `PoiType` service on path `/poi-type`
const createService = require("feathers-mongodb");
const createModel = require("../../models/poi-type.model");
const hooks = require("./poi-type.hooks");

module.exports = function() {
    const app = this;
    const paginate = app.get("paginate");
    const mongoClient = app.get('mongoClient');
    const Model = mongoClient.db('gipsi').collection('poi_type');

    const options = {
		Model,
		paginate
	};

    // Initialize our service with any options it requires
    app.use("/poi-type", createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service("poi-type");

    service.hooks(hooks);
};
