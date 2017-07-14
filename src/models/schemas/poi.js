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
		latitude: {
			type: 'number'
		},
		longitude: {
			type: 'number'
		}
	},
	required: ['name', 'categoryId', 'latitude', 'longitude']
};
