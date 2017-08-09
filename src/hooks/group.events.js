var _ = require('lodash');

module.exports = function () { 
	return function (hook) { 
		hook.result.data = hook.result.data.map((item) => {
			item.events = item.events.map(w => {
				return w.eventIds.map(id =>
					item.poi_events[_.findIndex(item.poi_events, { _id: id })]
				);
			});
			delete item.poi_events;
			return item;
		});
	};
};
