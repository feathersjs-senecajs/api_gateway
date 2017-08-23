module.exports = {
	properties: {
		reservationCode: {
			type: 'string'
		},
		startDate: {
			type: 'string',
			format: 'date-time'
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
