var _ = require('lodash');

module.exports = function () {
	function buildGeoJSON(data) {
		return {
			overlays: _.map(data, (item, key) => {
				return {
					id: key,
					category: key,
					points: Object.values(item).map((value) => new Object({
						type: 'Feature',
						properties: {
							name: value.name,
							typeName: value.poiType.name,
							categoryName: value.poiCategory.name,
							poiId: value._id
						},
						geometry: {
							type: 'Point',
							coordinates: [value.lng, value.lat]
						}
					}))
				};
			})
		};
	}

	return function (hook) { 
		if (hook.result.data) {
			hook.result.data = {
				poiList: hook.result.data,
				geoJSON: buildGeoJSON(_.groupBy(hook.result.data, 'category'))
			};
		}
	};
};
