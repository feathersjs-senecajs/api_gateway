module.exports = {
	include: {
		service: 'poi-event',
		nameAs: 'poi_events',
		parentField: '_id',
		childField: 'itinerary',
		asArray: true
	}
};
