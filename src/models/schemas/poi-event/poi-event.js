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
		poi: {
			type: 'string'
		},
		itinerary: {
			type: 'string'
		}
	},
	required: ['name', 'description', 'date', 'poi', 'itinerary']
};
