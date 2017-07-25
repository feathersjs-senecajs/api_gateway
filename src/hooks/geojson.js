module.exports = function () {
	function buildGeoJSON(data) {
		return data ? {
			overlays: [{
				id: "Wifi free",
				category: "green",
				points: data.map(item => new Object({
					type: "Feature",
					properties: {
						name: item.name
					},
					geometry: {
						type: "Point",
						coordinates: [item.lng, item.lat]
					}
				}))
			}]
		} : {};
	}

	return function (hook) { 
		hook.result.data = {
			poiList: hook.result.data,
			geoJSON: buildGeoJSON(hook.result.data)
		};
	};
};
