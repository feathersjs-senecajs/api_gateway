const ObjectId = require('mongodb').ObjectId;

module.exports = function () { 
	return async function populateEvents(hook) { 
		const poiEventSvc = hook.app.service('poi-event');
		const result = [];

		for (const e of hook.result.events) {
			e.eventIds = await poiEventSvc.find({
				query: {
					_id: {
						$in: e.eventIds.map(id => ObjectId(id))
					}
				}
			}).then(res => res.data);
			result = [..., result, e.eventIds];
		}
		hook.result.events = result;
	};
};