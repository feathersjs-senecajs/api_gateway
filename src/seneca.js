const updateGeoJsonState = require('./ms_interface/geojson.update');
const addItineraryCodes = require('./ms_interface/itinerary.codes.add');
const defaults = require('./defaults');

module.exports = function senecaConfig(app) {
	const seneca = app.get('seneca')
		.listen(defaults.rabbitmq);

	seneca.add('role:geojson,cmd:update', updateGeoJsonState(app));
	seneca.add('role:codes,cmd:add', addItineraryCodes(app));
};