const msgManager = require('../ms.message.manager');

module.exports = function (app) {
	return async function createGeoJson(msMsg, reply) {
		const geoJsonSvc = app.service('geo-json');
		const poiSvc = app.service('points');
		const msg = msgManager.receiveMessage(msMsg);
		const geoJsonList = await geoJsonSvc.find({
				query: { type: msg.data.type }
			})
			.then(res => res.data);
		let currentItem = geoJsonList.length > 0 ? geoJsonList[0] : null;

		if (currentItem) {
			geoJsonSvc.patch(currentItem._id, {
				geojson: msg.data.geojson
			});
		}
		else {
			geoJsonSvc.create(msg.data);
		}
		setPoi(msg.input.id, poiSvc);
		reply();
	};

	async function setPoi(poiId, poiSvc) {
		poiSvc.patch(poiId, {
			_set: true
		}).then(() => {
			poiSvc.emit('poiSet', {
				data: poiId
			});
		});
	}
};