const msgManager = require('../ms.message.manager');

module.exports = function (app) {
	return function createGeoJson(msMsg, reply) {
		const service = app.service('geo-json');
		const msg = msgManager.receiveMessage(msMsg);
		const geoJsonList = await service.find({
				query: { type: msg.data.type }
			})
			.then(res => res.data);
		let currentItem = geoJsonList.length > 0 ? geoJsonList[0] : null;

		if (currentItem) {
			service.patch(currentItem._id, {
				geojson: msg.data.geojson
			});
		}
		else {
			service.create(msg.data);
		}
		reply(null, { msg: 'ok' });
	};
};