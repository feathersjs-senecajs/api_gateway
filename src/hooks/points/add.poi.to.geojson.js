const msgManager = require('../../ms.message.manager');
const msPatterns = require('../../ms.patterns');
const defaults = require('../../defaults');

module.exports = function () {
	return async function updateGeoJson(hook) {
		let conn = {
			type: 'amqp',
			pin: 'role:*',
			url: defaults.rabbitmq.url
		};
		const senecaClient = hook.app.get('seneca')
			.client(conn);
		const category = await hook.app.service('poi-category').get(hook.data.category);
		const type = await hook.app.service('poi-type').get(hook.data.type);

		hook.data.category = category;
		hook.data.type = type;
		hook.data._id = hook.result._id;
		msgManager.sendMessage(
			senecaClient,
			`${msPatterns.geojsonAddPoiRequest},
			poi:${JSON.stringify(buildPoiModel(hook.data))},
			groupBy:${defaults.geoJsonGroupByField}`,
			`${msPatterns.geojsonUpdateResponse},data:`
		).subscribe(console.log);
	};
};

function buildPoiModel(poi) {
	return {
		lat: poi.lat,
		lng: poi.lng,
		categoryName: poi.category.name,
		categoryUri: poi.category.uri,
		typeName: poi.type.name,
		typeUri: poi.type.uri,
		id: poi._id,
		name: poi.name,
		class: poi._class
	};
}
