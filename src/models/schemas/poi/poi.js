module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		category: {
			type: 'string'
		},
		address: {
			type: 'string',
			maxLength: 100
		},
		phone: {
			type: 'string',
			maxLength: 10
		},
		website: {
			type: 'string',
			maxLength: 30
		},
		description: {
			type: 'string',
			maxLength: 300
		},
		lat: {
			type: 'number'
		},
		lng: {
			type: 'number'
		},
		avatar: {
			type: 'string'
		},
		background: {
			type: 'string'
		}
	},
	required: ['name', 'category', 'lat', 'lng']
};
