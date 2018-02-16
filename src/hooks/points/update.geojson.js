const addConnOptsPin = require('../utils/add.conn.opt.pin');

module.exports = function () {
	return function updateGeoJson(hook) {
		const seneca = hook.app.get('seneca')
			.client(connOptions);

		seneca.act({poi: buildPoiModel(hook.data)}, async (err, msg) => {
			// todo: Log ms status [Optional]
		});
	};
};

function connOptions(opt) {
	return addConnOptsPin(opt, 'role:geojson,cmd:add');
}

function buildPoiModel(poi) {
	return {
		lat: null,
		lng: null,
		categoryName: null,
		categoryUri: null,
		typeName: null,
		typeUri: null,
		id: null,
		name: null
	};
}
