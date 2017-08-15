var _ = require('lodash');

module.exports = function () { 
	return function (hook) {
		if (!hook.result.data) {
			hook.result.events = hook.result.events.map(w => {
				return w.eventIds.map(id =>
					hook.result.poi_events[_.findIndex(hook.result.poi_events, { _id: id })]
				);
			}).sort((w1, w2) => w2.day - w1.day);
			delete hook.result.poi_events;
		}
		else {
			delete hook.result.data.map(item => {
				delete item.poi_events;
			});
		}
	};
};
