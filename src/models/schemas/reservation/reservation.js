module.exports = {
	properties: {
		reservationCode: {
			type: 'string'
		},
		startDate: {
			type: 'string'
		},
		pax: {
			type: 'array',
			items: {
				type: 'string'
			}
		},
		itineraryId: {
			type: 'string'
		}
	},
	required: ['reservationCode', 'startDate']
};
