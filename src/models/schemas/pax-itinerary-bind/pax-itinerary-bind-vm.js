module.exports = {
	include: [{
		service: 'pax',
		nameAs: 'pax',
		parentField: 'paxId',
		childField: '_id',
	}, {
		service: 'itinerary',
		nameAs: 'itinerary',
		parentField: 'itineraryId',
		childField: '_id'
	}, {
		service: 'reservation',
		nameAs: 'reservation',
		parentField: 'reservationId',
		childField: '_id'
	}]
};
