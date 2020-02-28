module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		category: {
			type: 'string'
		},
		uri: {
			type: 'string'
		}
	},
	required: ['name', 'category']
}
