var _ = require('lodash');

module.exports = function () { 
	return function (hook) { 
		let aux = hook.result.data.map((item) => _.groupBy(item.poi_events, 'day'));

		hook.result.data = aux;
	};
};
