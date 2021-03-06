module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		category: {
			type: 'string'
		},
		type: {
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
		poster: {
			type: 'string'
		},
		video: {
			type: 'string'
		},
		avatar: {
			type: 'string'
		},
		_class: {
			type: 'string'
		},
		_set: {
			type: 'boolean'
		}
	},
	required: ['name', 'category', 'lat', 'lng']
};
