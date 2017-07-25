module.exports = function () {
	function buildGeoJSON(data) {

	}

	return function (hook) { 
		hook.result.data.push(buildGeoJSON(hook.result.data));
	};
};
