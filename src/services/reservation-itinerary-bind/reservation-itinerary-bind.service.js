// Initializes the `reservationItineraryBind` service on path `/reservation-itinerary-bind`
const createService = require('feathers-mongodb');
const hooks = require("./reservation-itinerary-bind.hooks");

module.exports = function() {
    const app = this;
    const paginate = app.get("paginate");
    const mongoClient = app.get('mongoClient');
    const Model = mongoClient.db('gipsi').collection('reservation_itinerary_bind');
    const options = {
		Model,
		paginate
	};

    // Initialize our service with any options it requires
    app.use("/reservation-itinerary-bind", createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service("reservation-itinerary-bind");

    service.hooks(hooks);
};
