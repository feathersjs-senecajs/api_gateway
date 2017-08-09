module.exports = {
	include: {
		asArray: true,
		service: 'poi-event',
		nameAs: 'poi_events',
		select: (hook, parentItem) => {
			parentItem.events.forEach(w => {
				w.eventIds.forEach(e => {
					return { _id: e };
				});
			});
		}
	}
};
