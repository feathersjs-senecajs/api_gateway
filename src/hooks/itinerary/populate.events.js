module.exports = function () { 
	return function populateEvents(hook) { 
		const poiEventSvc = hook.app.service('poi-event');
		const events = hook.itinerary.events.map(async e => { 
			e.eventIds = await poiEventSvc.find({
				query: {
					_id: {
						$in: e.eventIds
					}
				}
			});
			return e;
		});
	};
};