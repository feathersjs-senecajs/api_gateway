module.exports = function (app) {
	return function createGeoJson(msg, reply) {
		const service = app.service('geo-json');

		msg.data.forEach(async item => {
			let currentItem = await service.find({ type: item.type });

			if (currentItem) {
				currentItem.geojson = item.geojson;
				service.update(currentItem._id, currentItem);
			}
			else {
				service.create(item);
			}
		});
	};
};