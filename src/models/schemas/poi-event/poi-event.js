module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		description: {
			type: 'string',
			maxLength: 1000
		},
		date: {
			type: 'string',
		},
		poiId: {
			type: 'string'
		},
		itinerary: {
			type: 'string'
		}
	},
	required: ['name', 'description', 'date', 'poiId']
};
