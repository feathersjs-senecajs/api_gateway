module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		points: {
			type: 'array'
		}
	},
	required: ['name']
};

//todo: Define if an itinerary can be created without points
