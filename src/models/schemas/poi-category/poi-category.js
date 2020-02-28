module.exports = {
	properties: {
		name: {
			type: 'string',
			maxLength: 50
		},
		uri: {
			type: 'string'
		}
	},
	required: ['name']
};
