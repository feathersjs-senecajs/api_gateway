module.exports = function () {
	return function (hook) {
		var poiTypes = hook.result.poi_types;

		if (poiTypes && !poiTypes.constructor === Array) {
			hook.result.poi_types = [poiTypes];
		}
	}
}
