module.exports = {
	properties: {
		title: {
			type: 'string',
			maxLength: 50
		},
		summary: {
			type: 'string',
			maxLength: 300
		},
		description: {
			type: 'string',
			maxLength: 1000
		},
		events: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					day: {
						type: 'number'
					},
					eventIds: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				}
			}
		},
		days: {
			type: 'number'
		}
	},
	required: ['name', 'summary', 'descriptions', 'days']
};

//todo: Define if an itinerary can be created without points
