const updateGeoJsonState = require('./ms_interface/geojson.update');
const addItineraryCodes = require('./ms_interface/itinerary.codes.add');
const defaults = require('./defaults');
const msPatterns = require('./ms.patterns');
const paxCodesAssigned = require('./ms_interface/pax.codes.assigned');

module.exports = function senecaConfig() {
	const app = this;
	const seneca = app.get('seneca')
		.listen(defaults.rabbitmq);
	
	seneca.add('cmd:addpoi', updateGeoJsonState(app));
	seneca.add('cmd:setassignedcodes', paxCodesAssigned(app));
};