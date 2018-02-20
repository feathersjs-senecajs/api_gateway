const updateGeoJsonState = require('./ms_interface/geojson.update');
const addItineraryCodes = require('./ms_interface/itinerary.codes.add');
const defaults = require('./defaults');
const patternEncoder = require('./seneca.pattern.encoder');

const codeGenPattern = 'role:codes,cmd:add';

module.exports = function senecaConfig() {
	const app = this;
	const seneca = app.get('seneca')
		.listen(defaults.rabbitmq);
	
	seneca.add('role:geojson,cmd:update', updateGeoJsonState(app));
	seneca.add(codeGenPattern, addItineraryCodes(app));
	initialize(app);
};

function initialize(app) {
	const senecaClient = app.get('seneca')
		.client(defaults.rabbitmq);
	const replyPattern = patternEncoder.encode(`${codeGenPattern},data:`);

	senecaClient
		.act(`role:codes,cmd:gen,count:${defaults.codeLimit},reply:${replyPattern}`, console.log);
}