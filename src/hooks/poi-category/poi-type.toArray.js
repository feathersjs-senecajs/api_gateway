module.exports = function () {
	return function (hook) {
		var poiTypes = hook.result.data[0].poi_types;

		if (poiTypes && poiTypes.constructor === Object) {
			hook.result.data[0].poi_types = [poiTypes];
		}
	}
}
