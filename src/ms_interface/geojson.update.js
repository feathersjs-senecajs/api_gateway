const msgManager = require('../ms.message.manager');

module.exports = function (app) {
	return async function createGeoJson(msMsg, reply) {
		const geoJsonService = app.service('geo-json');
		const msg = msgManager.receiveMessage(msMsg);
		const geoJsonList = await geoJsonService.find({
				query: { type: msg.data.type }
			})
			.then(res => res.data);
		let currentItem = geoJsonList.length > 0 ? geoJsonList[0] : null;

		if (currentItem) {
			geoJsonService.patch(currentItem._id, {
				geojson: msg.data.geojson
			});
		}
		else {
			geoJsonService.create(msg.data);
		}
		reply(null, { msg: 'ok' });
	};
};